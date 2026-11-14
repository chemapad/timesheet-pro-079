import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

export async function captureDeviceScreenshot(url, outputPath, width, height, mobile = false) {
  const port = 9222 + Math.floor(Math.random() * 1000);
  const userDir = path.resolve(`.chrome_cdp_${port}`);

  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDir}`,
    '--no-first-run',
    '--hide-scrollbars',
    'about:blank'
  ]);

  try {
    // Wait for port to open
    let wsUrl = null;
    for (let i = 0; i < 30; i++) {
      try {
        const res = await fetch(`http://127.0.0.1:${port}/json/version`);
        if (res.ok) {
          const listRes = await fetch(`http://127.0.0.1:${port}/json/list`);
          const list = await listRes.json();
          if (list && list.length > 0) {
            wsUrl = list[0].webSocketDebuggerUrl;
            break;
          }
        }
      } catch (e) {
        // wait
      }
      await new Promise(r => setTimeout(r, 200));
    }

    if (!wsUrl) throw new Error('Could not connect to Chrome CDP');

    const ws = new WebSocket(wsUrl);
    let id = 1;
    const pending = new Map();

    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const msgId = id++;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

    await new Promise(resolve => ws.onopen = resolve);

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    };

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 2,
      mobile
    });

    await send('Page.navigate', { url });

    // Wait for page to finish rendering
    await new Promise(r => setTimeout(r, 800));

    const { data } = await send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(outputPath, Buffer.from(data, 'base64'));
    console.log(`Saved screenshot to ${outputPath} (${width}x${height}, mobile: ${mobile})`);

    ws.close();
  } finally {
    chrome.kill('SIGTERM');
    try {
      fs.rmSync(userDir, { recursive: true, force: true });
    } catch (_) {}
  }
}

// Standalone runner
if (process.argv[1]?.endsWith('take_mobile_screenshot.js')) {
  const filePath = path.resolve('index.html');
  const fileUrl = `file://${filePath}`;
  
  (async () => {
    console.log('Capturing iPhone (390x844)...');
    await captureDeviceScreenshot(fileUrl, 'screenshot_iphone.png', 390, 844, true);

    console.log('Capturing iPad (820x1180)...');
    await captureDeviceScreenshot(fileUrl, 'screenshot_ipad.png', 820, 1180, false);
    
    console.log('Done!');
  })();
}
