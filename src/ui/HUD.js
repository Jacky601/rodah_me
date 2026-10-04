import { IDENTITY } from '../config/identity.js';

export class HUD {
  constructor() {
    this._initStatusBar();
    this._initCursor();
    this._initOverlay();
  }

  _initStatusBar() {
    const bar = document.getElementById('status-bar');
    if (!bar) return;

    bar.innerHTML = `
      <div class="status-left">
        <span class="status-item"><span class="status-dot"></span>SYS_OK</span>
        <span class="status-item">${IDENTITY.prompt}</span>
        <span class="status-item" style="color:var(--color-accent);">${IDENTITY.statusBar}</span>
      </div>
      <div class="status-right">
        <span class="status-item">SECURITY: ZERO-TRUST</span>
        <span id="hud-clock" class="status-item" style="color:#00ff88;font-weight:bold;">--:--:--</span>
      </div>
    `;

    const updateClock = () => {
      const clockEl = document.getElementById('hud-clock');
      if (clockEl) {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString('fr-FR', { hour12: false });
      }
    };
    updateClock();
    setInterval(updateClock, 1000);
  }

  _initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    if (window.innerWidth < 768) {
      cursor.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
  }

  _initOverlay() {
    const overlay = document.getElementById('hud-overlay');
    if (!overlay) return;

    overlay.innerHTML = `
      <div class="hud-tag">&gt; EDAH_NET // TOPOLOGY SIMULATOR v1.0</div>
      <div class="hud-help">
        [CLIC / TACTILE] Explorer un nœud · [GLISSER] Orbiter · [MOLETTE] Zoomer<br>
        [MINIMAP] Téléportation directe vers n'importe quel port
      </div>
    `;
  }

  setHover(isHovering) {
    const cursor = document.getElementById('custom-cursor');
    if (cursor) {
      cursor.classList.toggle('hover', isHovering);
    }
  }
}
