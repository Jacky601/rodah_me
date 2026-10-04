import * as THREE from 'three';

export class Environment {
  constructor(scene) {
    this.scene = scene;
    this._addStarfield();
    this._addCyberGrid();
    this._addLights();
    this._addParticles();
  }

  _addStarfield() {
    const geometry = new THREE.BufferGeometry();
    const count = 2500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const c1 = new THREE.Color(0x00f0ff);
    const c2 = new THREE.Color(0x8892a4);
    const c3 = new THREE.Color(0xff3366);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 500;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 500;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 500;

      const rnd = Math.random();
      const col = rnd < 0.1 ? c1 : (rnd < 0.15 ? c3 : c2);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    this.starfield = new THREE.Points(geometry, material);
    this.scene.add(this.starfield);
  }

  _addCyberGrid() {
    const grid = new THREE.GridHelper(60, 40, 0x00f0ff, 0x111c2e);
    grid.position.y = -6;
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    this.scene.add(grid);
  }

  _addLights() {
    this.scene.add(new THREE.AmbientLight(0x0f172a, 1.2));

    const coreLight = new THREE.PointLight(0x00f0ff, 4, 30);
    coreLight.position.set(0, 4, 0);
    this.scene.add(coreLight);

    const cyberLight = new THREE.PointLight(0xff3366, 3, 25);
    cyberLight.position.set(0, 5, -12);
    this.scene.add(cyberLight);

    const netLight = new THREE.PointLight(0x0088ff, 3, 25);
    netLight.position.set(10, 5, -5);
    this.scene.add(netLight);
  }

  _addParticles() {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 120 : 350;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.1,
      transparent: true,
      opacity: 0.45,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  update(delta, time) {
    if (this.starfield) this.starfield.rotation.y = time * 0.003;
    if (this.particles) {
      this.particles.rotation.y = time * 0.02;
      this.particles.rotation.x = Math.sin(time * 0.05) * 0.05;
    }
  }
}
