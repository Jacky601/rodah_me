import { panelShell } from './_panelTemplate.js';

export function buildDevPanel() {
  const stack = ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker', 'Kafka', 'TensorFlow', 'PyTorch', 'Elasticsearch', 'Redis'];

  const services = [
    {
      title: 'Développement d\'Applications Sécurisées (Security by Design)',
      desc: 'Développement d\'outils métiers et de plateformes web en intégrant la sécurité dès la première ligne de code : validation stricte des entrées, contrôle cryptographique, gestion fine des sessions et zéro vulnérabilité par injection.',
    },
    {
      title: 'Intelligence Artificielle & Détection d\'Anomalies',
      desc: 'Entraînement et déploiement de modèles de Machine Learning spécialisés dans l\'identification de comportements anormaux, classification automatique et automatisation de processus complexes.',
    },
    {
      title: 'Pipelines Big Data & Traitement de Flux Massifs',
      desc: 'Architectures de collecte et d\'analyse en temps réel (Kafka, Elasticsearch) pour traiter des volumes massifs de logs, d\'événements système ou de données transactionnelles.',
    },
    {
      title: 'Intégration d\'API Sécurisées & Microservices',
      desc: 'Conception d\'APIs REST/GraphQL durcies avec authentification JWT/OAuth2, rate-limiting, chiffrement TLS et conteneurisation Docker standardisée.',
    },
    {
      title: 'Applications Dédiées au Secteur Santé',
      desc: 'Expertise particulière dans le domaine médical : traçabilité infalsifiable des prescriptions, intégrité des dossiers patients et respect strict des exigences de confidentialité médicale.',
    },
  ];

  const servicesHTML = services.map(s => `
    <div style="margin-bottom:1.2rem;padding:0.9rem;border-left:3px solid #9b59b6;background:rgba(155,89,182,0.03);">
      <strong style="color:#9b59b6;font-size:0.92rem;">${s.title}</strong>
      <p style="margin-top:0.3rem;font-size:0.85rem;color:var(--color-text-muted);line-height:1.6;">${s.desc}</p>
    </div>
  `).join('');

  return panelShell({
    title: 'DÉVELOPPEMENT LOGICIEL & IA',
    port: 'PORT 8080 — HTTP / DATA OPS',
    accentColor: '#9b59b6',
    content: `
      <p style="margin-bottom:1.5rem;font-size:0.92rem;">
        Unissant l'expertise logicielle au <strong>Master en Intelligence Artificielle et Big Data</strong>, je développe des solutions sur-mesure combinant performance algorithmique et blindage défensif.
      </p>

      <div style="margin-bottom:1.8rem;">
        ${servicesHTML}
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:rgba(155,89,182,0.05);border:1px solid rgba(155,89,182,0.25);">
        <p style="font-family:var(--font-mono);font-size:0.7rem;color:#9b59b6;margin-bottom:0.6rem;">STACK TECHNIQUE MAÎTRISÉE :</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
          ${stack.map(t => `<span style="font-family:var(--font-mono);font-size:0.68rem;padding:0.25rem 0.55rem;border:1px solid rgba(155,89,182,0.4);color:#9b59b6;background:rgba(155,89,182,0.08);">${t}</span>`).join('')}
        </div>
      </div>

      <button class="panel-cta" style="color:#9b59b6;border-color:#9b59b6;" onclick="window.panelManager?.open('projects')">
        <span>&gt; Explorer les réalisations concrètes (DENTIVA...)</span>
      </button>
    `,
  });
}
