import * as THREE from 'three';
import gsap from 'gsap';

export class CameraController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.dom = domElement;
    this.isTransitioning = false;
    this.spherical = { theta: 0.2, phi: 0.85, radius: 34 };
    this._isDragging = false;
    this._lastMouse = { x: 0, y: 0 };
    this.currentTarget = new THREE.Vector3(0, 0, 0);

    this._bindEvents();
    this._updateCameraPosition();
  }

  _bindEvents() {
    this.dom.addEventListener('mousedown', e => {
      this._isDragging = true;
      this._lastMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mousemove', e => {
      if (!this._isDragging || this.isTransitioning) return;
      const dx = (e.clientX - this._lastMouse.x) * 0.005;
      const dy = (e.clientY - this._lastMouse.y) * 0.005;

      this.spherical.theta -= dx;
      this.spherical.phi = Math.max(0.25, Math.min(1.35, this.spherical.phi + dy));

      this._lastMouse = { x: e.clientX, y: e.clientY };
      this._updateCameraPosition();
    });

    window.addEventListener('mouseup', () => {
      this._isDragging = false;
    });

    this.dom.addEventListener('wheel', e => {
      if (this.isTransitioning) return;
      this.spherical.radius = Math.max(14, Math.min(55, this.spherical.radius + e.deltaY * 0.04));
      this._updateCameraPosition();
    }, { passive: true });

    // Touch events for mobile
    this.dom.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        this._isDragging = true;
        this._lastMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchmove', e => {
      if (!this._isDragging || this.isTransitioning || e.touches.length !== 1) return;
      const dx = (e.touches[0].clientX - this._lastMouse.x) * 0.006;
      const dy = (e.touches[0].clientY - this._lastMouse.y) * 0.006;

      this.spherical.theta -= dx;
      this.spherical.phi = Math.max(0.25, Math.min(1.35, this.spherical.phi + dy));

      this._lastMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      this._updateCameraPosition();
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this._isDragging = false;
    });
  }

  _updateCameraPosition() {
    const { theta, phi, radius } = this.spherical;
    this.camera.position.set(
      this.currentTarget.x + radius * Math.sin(phi) * Math.sin(theta),
      this.currentTarget.y + radius * Math.cos(phi),
      this.currentTarget.z + radius * Math.sin(phi) * Math.cos(theta)
    );
    this.camera.lookAt(this.currentTarget);
  }

  flyToNode(nodeGroup, onArrival) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const targetPos = nodeGroup.position.clone();
    const offset = new THREE.Vector3(0, 3.2, 7.5);
    const destCamPos = targetPos.clone().add(offset);

    const lookTarget = targetPos.clone();

    gsap.killTweensOf(this.camera.position);

    gsap.to(this.camera.position, {
      x: destCamPos.x,
      y: destCamPos.y,
      z: destCamPos.z,
      duration: 1.3,
      ease: 'power3.inOut',
      onUpdate: () => {
        this.camera.lookAt(lookTarget);
      },
      onComplete: () => {
        this.camera.lookAt(lookTarget);
        this.currentTarget.copy(lookTarget);
        this.isTransitioning = false;
        onArrival?.();
      }
    });
  }

  resetToGodView(onComplete) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    this.currentTarget.set(0, 0, 0);
    this.spherical = { theta: 0.2, phi: 0.85, radius: 34 };

    const { theta, phi, radius } = this.spherical;
    const destX = radius * Math.sin(phi) * Math.sin(theta);
    const destY = radius * Math.cos(phi);
    const destZ = radius * Math.sin(phi) * Math.cos(theta);

    gsap.to(this.camera.position, {
      x: destX,
      y: destY,
      z: destZ,
      duration: 1.1,
      ease: 'power2.inOut',
      onUpdate: () => {
        this.camera.lookAt(0, 0, 0);
      },
      onComplete: () => {
        this.isTransitioning = false;
        this._updateCameraPosition();
        onComplete?.();
      }
    });
  }
}
