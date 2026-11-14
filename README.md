# ⏱️ TIMESHEET PRO — 079 Data Center (Field to Dayforce)
> Sistema integral de digitalización de partes de trabajo, toma de asistencia rápida en campo, verificación con PIN por líder, aprobación dual por superintendentes (Oshane Davis & Franklin Ramirez), control de horas-hombre por Phase Code y exportación automatizada a Ceridian Dayforce. Soporte bilingüe completo (English & Español).

---

## 🌐 Demo en Vivo (GitHub Pages)
👉 **[https://chemapad.github.io/timesheet-pro-079/](https://chemapad.github.io/timesheet-pro-079/)**

Totalmente optimizado para teléfonos móviles, tablets en campo y laptops sin necesidad de conexión constante a internet (100% Offline-First).

---

## 🚀 ¿Cómo abrir y presentar el Demo?

1. **Abrir en navegador:**
   Accede directamente al link de GitHub Pages o abre el archivo [`index.html`](index.html) en Chrome, Edge o Safari.
   * **Selector de Idioma:** Presiona el botón `🌐 English / Español` arriba a la derecha en cualquier momento para alternar todo el sistema entre inglés y español al instante.
2. **O levantar un servidor local:**
   ```bash
   npx serve .
   # O con Python:
   python3 -m http.server 8080
   ```

---

## 🎬 Guión de Demostración en Obra (Field Walkthrough)

### 1. Vista de Líder en Campo (👷 Field Lead)
* **El problema que resuelve:** En campo real (6:55 AM), tomar firmas dibujadas a mano en hojas de papel genera demoras, tachones y errores de nómina.
* **El Flujo Moderno:**
  1. Cada líder ve únicamente a su propia cuadrilla (ej: *Carlos Gómez — Cuadrilla A*). Para el demo, el botón `🔄 Cambiar` permite simular cualquiera de las 4 cuadrillas.
  2. **1-Click Asistencia:** Presiona el botón verde `✅ Presente (8 hrs)` de un trabajador para alternarlo a `❌ Ausente (0 hrs)` y viceversa.
  3. **Marcar Todos:** Presiona `⚡ Marcar Todos Presentes` para agilizar la entrada.
  4. **Phase Codes por Trabajador:** Asigna un Phase Code general a toda la cuadrilla o cámbialo individualmente por trabajador según la tarea del día.
  5. **Prestar / Mover Personal:** Si un trabajador va a apoyar a otra cuadrilla hoy, usa `🔄 Prestar` para transferirlo o quitarlo de la lista para que no cuente como ausente.
  6. **Verificación con Código de Empleado / PIN:** Al presionar **"📤 Certificar y Enviar Cuadrilla"**, el sistema solicita el Código de Empleado del líder (ej: `4525` para Carlos Gómez, `4601` para Luis Martínez, `4701` para Pedro Soto, `4801` para David Ramos). Si es correcto, certifica digitalmente con fecha y hora exacta.

### 2. Vista de Superintendentes (🏗️ Superintendent)
* **Superintendencia Dual:**
  * **Oshane Davis:** Superintendente a cargo del Área 1 (Cuadrillas A & B).
  * **Franklin Ramirez:** Superintendente a cargo del Área 2 (Cuadrillas C & D).
  * Vista consolidada para ver la obra completa.
* **Gating de Listas:** Las listas de trabajadores **solo aparecen cuando el líder en campo ha enviado y certificado la cuadrilla**. Si la cuadrilla no ha sido enviada, muestra una advertencia de protección (`⏳ Esperando Envío`) y mantiene la lista bloqueada.
* **Aprobación de Jornada:** El superintendente revisa los conteos y aprueba formalmente el día con un clic en **"✅ Aprobar y Enviar a Secretaría"**.

### 3. Vista de Horas-Hombre (📊 Man-Hours)
* **Control de Costos:** Gráficos SVG nativos de Barras y Dona por Phase Code (`Underground Conduit`, `Cable Tray`, `Wire Pull`, `Terminations`, etc.).
* **Gating por Aprobación:** Las horas **no cargan en este panel hasta que el Superintendente responsable aprueba la jornada**, garantizando que la gerencia solo vea datos formalmente auditados y validados.

### 4. Vista de Secretaría y Exportación Dayforce (👩‍💼 Office)
* **Recepción y Auditoría:** La secretaria recibe la notificación de aprobación del superintendente y puede ajustar horas o dividir jornadas si un trabajador dividió su día en dos tareas.
* **Exportación Inmediata:**
  * **Descargar CSV Dayforce:** Genera el archivo con el formato oficial de Ceridian Dayforce (`EmployeeNumber,WorkDate,JobNumber,PhaseCode,Hours,PayCode,Supervisor,AttendanceStatus`).
  * **Hoja de Auditoría Legal (PDF):** Documento formal con firmas digitales, sellos de tiempo y aprobaciones listo para imprimir o archivar.

---

## 🛠️ Especificaciones Técnicas

* **Arquitectura:** HTML5, CSS3 moderno con variables CSS, JavaScript ES6+.
* **Offline-Ready:** Persistencia reactiva en `localStorage`.
* **Zero Dependencias Externas:** Gráficos SVG nativos generados por código, sin frameworks pesados ni llamadas a CDNs externas.
* **Pruebas Automatizadas:** 72 pruebas unitarias pasando al 100% (`node test_suite.js`).
