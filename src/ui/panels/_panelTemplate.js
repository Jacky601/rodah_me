export function panelShell({ title, port, accentColor, content }) {
  return `
  <div class="panel" style="--accent: ${accentColor}; border-color: ${accentColor};">
    <div class="panel-header">
      <div>
        <div class="panel-title" style="color:${accentColor}">${title}</div>
        ${port ? `<div class="panel-port">&gt; ${port} // CONNECTION ESTABLISHED</div>` : ''}
      </div>
      <button class="panel-close" id="panel-close-btn">[ESC] DÉCONNEXION</button>
    </div>
    <div class="panel-body">${content}</div>
  </div>`;
}
