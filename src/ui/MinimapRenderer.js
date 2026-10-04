import { NODE_CONFIG, CONNECTIONS } from '../nodes/NodeConfig.js';

export class MinimapRenderer {
  constructor(containerId, onNodeClick) {
    this.onNodeClick = onNodeClick;
    this.activeNodeId = null;
    this.collapsed = false;

    this._buildDOM(containerId);
    this._draw();
  }

  _buildDOM(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <header>
        <span>[ EDAH_NET TOPOLOGY ]</span>
        <span style="color:#00ff88;font-size:0.5rem;">● LIVE</span>
      </header>
      <canvas id="minimap-canvas" width="180" height="135"></canvas>
      <button id="minimap-toggle" type="button">[MAP] RÉDUIRE / AGRANDIR</button>
    `;

    this.canvas = document.getElementById('minimap-canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.addEventListener('click', e => this._handleClick(e));
    document.getElementById('minimap-toggle')?.addEventListener('click', () => this._toggle());
  }

  _project(pos3d) {
    const scale = 6.8;
    const cx = 90;
    const cy = 68;
    return {
      x: cx + pos3d[0] * scale,
      y: cy + pos3d[2] * scale,
    };
  }

  _draw() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, 180, 135);

    // Draw connections
    CONNECTIONS.forEach(([idA, idB]) => {
      const a = NODE_CONFIG.find(n => n.id === idA);
      const b = NODE_CONFIG.find(n => n.id === idB);
      if (!a || !b) return;

      const pA = this._project(a.position);
      const pB = this._project(b.position);

      ctx.beginPath();
      ctx.moveTo(pA.x, pA.y);
      ctx.lineTo(pB.x, pB.y);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.22)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw nodes
    NODE_CONFIG.forEach(cfg => {
      const p = this._project(cfg.position);
      const isActive = cfg.id === this.activeNodeId;
      const colorHex = '#' + cfg.color.toString(16).padStart(6, '0');

      if (isActive) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2);
        ctx.strokeStyle = colorHex;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, isActive ? 5 : 3.5, 0, Math.PI * 2);
      ctx.fillStyle = colorHex;
      ctx.shadowColor = colorHex;
      ctx.shadowBlur = isActive ? 8 : 4;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.fillStyle = isActive ? '#ffffff' : 'rgba(232, 234, 240, 0.75)';
      ctx.font = `${isActive ? 'bold' : 'normal'} 6px JetBrains Mono, monospace`;
      ctx.fillText(cfg.id.toUpperCase(), p.x + 6, p.y + 2);
    });
  }

  _handleClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = 180 / rect.width;
    const scaleY = 135 / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    const hit = NODE_CONFIG.find(cfg => {
      const p = this._project(cfg.position);
      return Math.hypot(p.x - mx, p.y - my) < 12;
    });

    if (hit) {
      this.onNodeClick?.(hit.id);
    }
  }

  _toggle() {
    this.collapsed = !this.collapsed;
    if (this.canvas) {
      this.canvas.style.display = this.collapsed ? 'none' : 'block';
    }
  }

  setActiveNode(nodeId) {
    this.activeNodeId = nodeId;
    this._draw();
  }
}
