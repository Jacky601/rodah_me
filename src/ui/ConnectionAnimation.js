export class ConnectionAnimation {
  constructor(containerId = 'connection-anim') {
    this.el = document.getElementById(containerId);
  }

  play(portLabel, portProtocol, color = '#00f0ff', onComplete) {
    if (!this.el) {
      onComplete?.();
      return;
    }

    this.el.style.color = color;
    const lines = [
      `> INITIATING HANDSHAKE WITH ${portLabel}...`,
      `> PROTOCOL: ${portProtocol || 'TCP/IP SECURE'}`,
      `> CIPHER: TLS_AES_256_GCM_SHA384`,
      `> CLEARANCE: ACCESS GRANTED`,
    ];

    let i = 0;
    this.el.style.opacity = '1';
    this.el.innerHTML = '';

    const interval = setInterval(() => {
      this.el.innerHTML += lines[i] + '<br>';
      i++;
      if (i >= lines.length) {
        clearInterval(interval);
        setTimeout(() => {
          this.el.style.opacity = '0';
          setTimeout(() => {
            this.el.innerHTML = '';
            onComplete?.();
          }, 200);
        }, 350);
      }
    }, 120);
  }
}
