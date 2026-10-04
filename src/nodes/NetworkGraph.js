import * as THREE from 'three';
import { NODE_CONFIG, CONNECTIONS } from './NodeConfig.js';
import { NetworkNode } from './NetworkNode.js';

export class NetworkGraph {
  constructor(scene) {
    this.scene = scene;
    this.nodes = {};
    this.connectionLines = [];
    this.packets = [];

    this._buildNodes();
    this._buildConnections();
    this._buildDataPackets();
  }

  _buildNodes() {
    NODE_CONFIG.forEach(cfg => {
      const node = new NetworkNode(cfg);
      this.nodes[cfg.id] = node;
      this.scene.add(node.group);
    });
  }

  _buildConnections() {
    CONNECTIONS.forEach(([idA, idB]) => {
      const a = NODE_CONFIG.find(n => n.id === idA);
      const b = NODE_CONFIG.find(n => n.id === idB);
      if (!a || !b) return;

      const posA = new THREE.Vector3(...a.position);
      const posB = new THREE.Vector3(...b.position);

      const curve = new THREE.LineCurve3(posA, posB);
      const points = curve.getPoints(20);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      const material = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.22,
      });

      const line = new THREE.Line(geometry, material);
      this.scene.add(line);
      this.connectionLines.push({ line, curve, idA, idB });
    });
  }

  _buildDataPackets() {
    const packetGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    this.connectionLines.forEach(conn => {
      const packetMesh = new THREE.Mesh(packetGeo, packetMat);
      this.scene.add(packetMesh);
      this.packets.push({
        mesh: packetMesh,
        curve: conn.curve,
        progress: Math.random(),
        speed: 0.2 + Math.random() * 0.2,
      });
    });
  }

  getClickableObjects() {
    return Object.values(this.nodes).map(n => n.mesh);
  }

  getNodeById(id) {
    return this.nodes[id];
  }

  update(delta, time) {
    Object.values(this.nodes).forEach(n => n.update(delta, time));

    // Update animated data packets
    this.packets.forEach(p => {
      p.progress += delta * p.speed;
      if (p.progress > 1) p.progress = 0;
      const point = p.curve.getPoint(p.progress);
      p.mesh.position.copy(point);
    });

    // Subtle line pulse
    this.connectionLines.forEach((c, idx) => {
      c.line.material.opacity = 0.15 + Math.sin(time * 2 + idx) * 0.1;
    });
  }
}
