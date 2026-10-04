import * as THREE from 'three';

export class NetworkNode {
  constructor(config) {
    this.id = config.id;
    this.config = config;
    this.group = new THREE.Group();
    this.group.position.set(...config.position);
    this.group.userData = { nodeId: config.id };

    this._buildMesh();
    this._buildRings();
    this._buildGlow();
    this._buildLabelSprite();
  }

  _buildMesh() {
    const radius = this.config.radius || 0.85;
    const geometry = new THREE.IcosahedronGeometry(radius, 1);
    const material = new THREE.MeshStandardMaterial({
      color: this.config.color,
      emissive: this.config.color,
      emissiveIntensity: 0.45,
      metalness: 0.85,
      roughness: 0.15,
      wireframe: false,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.userData = { nodeId: this.id };
    this.group.add(this.mesh);

    // Inner wireframe for cyber tech look
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat);
    wireMesh.scale.setScalar(1.02);
    this.group.add(wireMesh);
    this.wireMesh = wireMesh;
  }

  _buildRings() {
    const radius = (this.config.radius || 0.85) * 1.5;
    const geometry = new THREE.TorusGeometry(radius, 0.02, 8, 64);
    const material = new THREE.MeshBasicMaterial({
      color: this.config.color,
      transparent: true,
      opacity: 0.25,
    });

    this.orbitRing = new THREE.Mesh(geometry, material);
    this.orbitRing.rotation.x = Math.PI / 2;
    this.group.add(this.orbitRing);

    // Target/Selection Ring
    const targetGeo = new THREE.TorusGeometry(radius * 1.25, 0.035, 8, 48);
    const targetMat = new THREE.MeshBasicMaterial({
      color: this.config.color,
      transparent: true,
      opacity: 0,
    });
    this.targetRing = new THREE.Mesh(targetGeo, targetMat);
    this.targetRing.rotation.x = Math.PI / 2;
    this.group.add(this.targetRing);
  }

  _buildGlow() {
    const radius = (this.config.radius || 0.85) * 1.4;
    const geometry = new THREE.SphereGeometry(radius, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color: this.config.color,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });

    this.glow = new THREE.Mesh(geometry, material);
    this.group.add(this.glow);
  }

  _buildLabelSprite() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(8, 11, 16, 0.85)';
    ctx.roundRect(4, 4, 248, 56, 8);
    ctx.fill();

    ctx.strokeStyle = '#' + this.config.color.toString(16).padStart(6, '0');
    ctx.lineWidth = 2;
    ctx.roundRect(4, 4, 248, 56, 8);
    ctx.stroke();

    ctx.fillStyle = '#' + this.config.color.toString(16).padStart(6, '0');
    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.config.label, 128, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0.85,
    });

    this.labelSprite = new THREE.Sprite(spriteMat);
    this.labelSprite.position.y = (this.config.radius || 0.85) * 2.2;
    this.labelSprite.scale.set(3.2, 0.8, 1);
    this.group.add(this.labelSprite);
  }

  update(delta, time) {
    this.mesh.rotation.y += delta * 0.4;
    this.mesh.rotation.x += delta * 0.2;
    if (this.wireMesh) {
      this.wireMesh.rotation.y -= delta * 0.3;
    }
    if (this.orbitRing) {
      this.orbitRing.rotation.z += delta * 0.5;
    }
    if (this.targetRing && this.isTargeted) {
      this.targetRing.rotation.z -= delta * 1.5;
    }
    this.glow.material.opacity = 0.06 + Math.sin(time * 2.5 + this.group.position.x) * 0.04;
  }

  setTargeted(active) {
    this.isTargeted = active;
    if (this.targetRing) {
      this.targetRing.material.opacity = active ? 0.9 : 0;
    }
    if (this.orbitRing) {
      this.orbitRing.material.opacity = active ? 0.8 : 0.25;
    }
    this.mesh.material.emissiveIntensity = active ? 0.9 : 0.45;
  }
}
