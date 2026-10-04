import * as THREE from 'three';

export class RaycastManager {
  constructor(camera, domElement) {
    this.camera = camera;
    this.dom = domElement;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-999, -999);
    this.clickableObjects = [];
    this.onHover = null;
    this.onClick = null;
    this.enabled = true;

    this._bindEvents();
  }

  setClickableObjects(objects) {
    this.clickableObjects = objects;
  }

  _bindEvents() {
    this.dom.addEventListener('mousemove', e => {
      if (!this.enabled) return;
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      this._checkHover();
    });

    this.dom.addEventListener('click', e => {
      if (!this.enabled) return;
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      this._checkClick();
    });

    this.dom.addEventListener('touchend', e => {
      if (!this.enabled || !e.changedTouches[0]) return;
      const touch = e.changedTouches[0];
      this.mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
      this._checkClick();
    });
  }

  _checkHover() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.clickableObjects, false);
    const nodeId = hits.length > 0 ? hits[0].object.userData.nodeId : null;
    this.onHover?.(nodeId);
  }

  _checkClick() {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.clickableObjects, false);
    if (hits.length > 0) {
      this.onClick?.(hits[0].object.userData.nodeId);
    }
  }
}
