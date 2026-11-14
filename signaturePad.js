// ===== LIENZO DE FIRMA TÁCTIL DE ALTA DEFINICIÓN — SIGNATUREPAD.JS =====

export class SignaturePad {
  constructor(canvasElement, options = {}) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.strokeColor = options.strokeColor || '#0c4381';
    this.lineWidth = options.lineWidth || 2.5;
    this.isDrawing = false;
    this.points = [];
    this.hasDrawn = false;

    this.initCanvas();
    this.bindEvents();
  }

  initCanvas() {
    // Escala para pantallas Retina / alta resolución
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    const rect = this.canvas.getBoundingClientRect();
    const width = rect.width || 320;
    const height = rect.height || 160;

    this.canvas.width = width * ratio;
    this.canvas.height = height * ratio;
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(ratio, ratio);

    this.ctx.strokeStyle = this.strokeColor;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.clear();
  }

  resize() {
    const backup = this.hasDrawn ? this.toDataURL() : null;
    this.initCanvas();
    if (backup) {
      const img = new Image();
      img.onload = () => {
        const rect = this.canvas.getBoundingClientRect();
        this.ctx.drawImage(img, 0, 0, rect.width, rect.height);
        this.hasDrawn = true;
      };
      img.src = backup;
    }
  }

  getPointerPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  bindEvents() {
    const start = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      this.points = [];
      const pos = this.getPointerPos(e);
      this.points.push(pos);
      this.drawDot(pos.x, pos.y);
      this.hasDrawn = true;
    };

    const move = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = this.getPointerPos(e);
      this.points.push(pos);

      if (this.points.length >= 3) {
        const p0 = this.points[this.points.length - 3];
        const p1 = this.points[this.points.length - 2];
        const p2 = this.points[this.points.length - 1];

        const mid1 = { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 };
        const mid2 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };

        this.ctx.beginPath();
        this.ctx.moveTo(mid1.x, mid1.y);
        this.ctx.quadraticCurveTo(p1.x, p1.y, mid2.x, mid2.y);
        this.ctx.stroke();
      }
    };

    const end = (e) => {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.points = [];
      }
    };

    // Eventos Mouse y Touch
    this.canvas.addEventListener('mousedown', start, { passive: false });
    window.addEventListener('mousemove', move, { passive: false });
    window.addEventListener('mouseup', end);

    this.canvas.addEventListener('touchstart', start, { passive: false });
    this.canvas.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', end);
    window.addEventListener('touchcancel', end);
  }

  drawDot(x, y) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.lineWidth / 2, 0, Math.PI * 2);
    this.ctx.fillStyle = this.strokeColor;
    this.ctx.fill();
  }

  clear() {
    this.ctx.save();
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.restore();
    this.hasDrawn = false;
    this.points = [];
  }

  isEmpty() {
    return !this.hasDrawn;
  }

  toDataURL() {
    return this.canvas.toDataURL('image/png');
  }
}
