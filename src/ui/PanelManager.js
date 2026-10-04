import { buildHeroPanel } from './panels/HeroPanel.js';
import { buildAboutPanel } from './panels/AboutPanel.js';
import { buildCyberPanel } from './panels/CyberPanel.js';
import { buildNetPanel } from './panels/NetPanel.js';
import { buildDevPanel } from './panels/DevPanel.js';
import { buildProjectsPanel } from './panels/ProjectsPanel.js';
import { buildCertsPanel } from './panels/CertsPanel.js';
import { buildContactPanel, initContactForm } from './panels/ContactPanel.js';

const BUILDERS = {
  hero: buildHeroPanel,
  about: buildAboutPanel,
  cyber: buildCyberPanel,
  net: buildNetPanel,
  dev: buildDevPanel,
  projects: buildProjectsPanel,
  certs: buildCertsPanel,
  contact: buildContactPanel,
};

export class PanelManager {
  constructor(cameraController, minimapRenderer, networkGraph) {
    this.container = document.getElementById('panel-container');
    this.cameraController = cameraController;
    this.minimapRenderer = minimapRenderer;
    this.networkGraph = networkGraph;
    this.activeNodeId = null;

    this._bindGlobalEvents();
  }

  _bindGlobalEvents() {
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.activeNodeId) {
        this.close();
      }
    });

    this.container.addEventListener('click', e => {
      if (e.target === this.container) {
        this.close();
      }
    });

    document.addEventListener('open-node', e => {
      if (e.detail) {
        this.open(e.detail);
      }
    });
  }

  open(nodeId) {
    const builder = BUILDERS[nodeId];
    if (!builder) return;

    // Reset old node highlight
    if (this.activeNodeId && this.networkGraph) {
      const oldNode = this.networkGraph.getNodeById(this.activeNodeId);
      if (oldNode) oldNode.setTargeted(false);
    }

    this.activeNodeId = nodeId;

    // Highlight node in 3D scene & minimap
    if (this.networkGraph) {
      const node = this.networkGraph.getNodeById(nodeId);
      if (node) node.setTargeted(true);
    }
    this.minimapRenderer?.setActiveNode(nodeId);

    // Inject panel HTML
    this.container.innerHTML = builder();
    this.container.classList.add('active');

    // Attach close button listener
    document.getElementById('panel-close-btn')?.addEventListener('click', () => {
      this.close();
    });

    // If contact panel, initialize form logic
    if (nodeId === 'contact') {
      initContactForm();
    }
  }

  close() {
    if (!this.activeNodeId) return;

    if (this.networkGraph) {
      const node = this.networkGraph.getNodeById(this.activeNodeId);
      if (node) node.setTargeted(false);
    }

    this.container.classList.remove('active');
    this.container.innerHTML = '';
    this.activeNodeId = null;

    this.minimapRenderer?.setActiveNode(null);
    this.cameraController?.resetToGodView();
  }
}
