import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export class PostProcessor {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.enabled = window.innerWidth >= 768;

    if (this.enabled) {
      try {
        this.composer = new EffectComposer(renderer);
        this.composer.addPass(new RenderPass(scene, camera));

        this.bloomPass = new UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          0.8,   // strength
          0.3,   // radius
          0.7    // threshold
        );
        this.composer.addPass(this.bloomPass);

        window.addEventListener('resize', () => {
          this.enabled = window.innerWidth >= 768;
          if (this.enabled && this.composer) {
            this.composer.setSize(window.innerWidth, window.innerHeight);
          }
        });
      } catch (e) {
        console.warn('Post-processing unsupported, fallback to basic renderer:', e);
        this.enabled = false;
      }
    }
  }

  render() {
    if (this.enabled && this.composer) {
      this.composer.render();
    } else {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
