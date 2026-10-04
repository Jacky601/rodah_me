import * as THREE from 'three';
import { SceneManager } from './scene/SceneManager.js';
import { Environment } from './scene/Environment.js';
import { CameraController } from './scene/CameraController.js';
import { RaycastManager } from './scene/RaycastManager.js';
import { PostProcessor } from './scene/PostProcessor.js';
import { NetworkGraph } from './nodes/NetworkGraph.js';
import { NODE_CONFIG } from './nodes/NodeConfig.js';
import { MinimapRenderer } from './ui/MinimapRenderer.js';
import { HUD } from './ui/HUD.js';
import { ConnectionAnimation } from './ui/ConnectionAnimation.js';
import { PanelManager } from './ui/PanelManager.js';
import { isWebGLAvailable } from './utils/WebGLDetector.js';

if (!isWebGLAvailable()) {
  document.getElementById('app').innerHTML = `
    <div style="color:#00f0ff;font-family:monospace;padding:2.5rem;background:#080b10;height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;">
      <div>
        <p style="font-size:1.5rem;color:#ff3366;margin-bottom:1rem;">&gt; ACCÈS REFUSÉ : WEBGL NON DÉTECTÉ</p>
        <p style="color:#8892a4;line-height:1.6;">Le moteur 3D d'EDAH_NET requiert l'accélération graphique WebGL.<br>Veuillez activer WebGL ou mettre à jour votre navigateur pour explorer la topologie.</p>
      </div>
    </div>
  `;
} else {
  const canvas = document.getElementById('threejs-canvas');
  const sm = new SceneManager(canvas);
  const env = new Environment(sm.scene);
  const graph = new NetworkGraph(sm.scene);
  const cameraCtrl = new CameraController(sm.camera, canvas);
  const postProc = new PostProcessor(sm.renderer, sm.scene, sm.camera);
  const hud = new HUD();
  const connAnim = new ConnectionAnimation('connection-anim');

  // Navigation handler function
  function navigateToNode(nodeId) {
    const nodeObj = graph.getNodeById(nodeId);
    if (!nodeObj) return;

    const cfg = NODE_CONFIG.find(c => c.id === nodeId);
    const colorHex = cfg ? '#' + cfg.color.toString(16).padStart(6, '0') : '#00f0ff';

    // Highlight hovered/clicked node
    Object.values(graph.nodes).forEach(n => n.setTargeted(n.id === nodeId));

    // Fly camera to node
    cameraCtrl.flyToNode(nodeObj.group, () => {
      connAnim.play(cfg?.label || nodeId, cfg?.port || 'TCP', colorHex, () => {
        panelManager.open(nodeId);
      });
    });
  }

  // Setup Minimap
  const minimap = new MinimapRenderer('minimap-container', nodeId => {
    navigateToNode(nodeId);
  });

  // Setup PanelManager
  const panelManager = new PanelManager(cameraCtrl, minimap, graph);
  window.panelManager = panelManager;

  // Setup Raycasting for 3D interactions
  const raycast = new RaycastManager(sm.camera, canvas);
  raycast.setClickableObjects(graph.getClickableObjects());

  let currentHoveredId = null;

  raycast.onHover = nodeId => {
    if (nodeId !== currentHoveredId) {
      currentHoveredId = nodeId;
      hud.setHover(!!nodeId);

      // Node subtle target effect on hover (if not panel open)
      if (!panelManager.activeNodeId) {
        Object.values(graph.nodes).forEach(n => {
          n.setTargeted(n.id === nodeId);
        });
      }
    }
  };

  raycast.onClick = nodeId => {
    if (!nodeId || cameraCtrl.isTransitioning) return;
    navigateToNode(nodeId);
  };

  // Main animation loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    env.update(delta, elapsedTime);
    graph.update(delta, elapsedTime);

    if (postProc.enabled) {
      postProc.render();
    } else {
      sm.render();
    }
  }

  animate();

  // Welcome auto-open Hero after a short delay
  setTimeout(() => {
    panelManager.open('hero');
  }, 900);
}
