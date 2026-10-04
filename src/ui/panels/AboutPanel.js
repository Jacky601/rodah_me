import { panelShell } from './_panelTemplate.js';

export function buildAboutPanel() {
  const timeline = [
    { year: 'FORMATION', label: 'Licence en Systèmes Informatiques et Logiciels', detail: 'Fondations solides en développement d\'applications, structures de données, architecture matérielle, systèmes d\'exploitation Unix/Linux et réseaux informatiques fondamentaux.' },
    { year: 'MASTER SSI', label: 'Master en Sécurité des Systèmes Informatiques', detail: 'Spécialisation approfondie en cryptographie appliquée, tests d\'intrusion (pentesting), sécurité périmétrique, protocoles de chiffrement, analyse forensique et gouvernance de conformité (ISO 27001, RGPD).' },
    { year: 'MASTER IA', label: 'Master en Intelligence Artificielle & Big Data', detail: 'Ingénierie des pipelines de données volumineuses, modèles prédictifs Machine Learning & Deep Learning, détection automatique d\'anomalies dans les flux de trafic et industrialisation MLOps.' },
    { year: 'ACCRÉDITATION', label: 'Certification Cisco CCNA & CCNP', detail: 'Validation officielle de l\'expertise Cisco : routage avancé multi-protocoles (OSPF, BGP), commutation d\'entreprise, VPN IPSec site-à-site et architectures réseau résilientes haute disponibilité.' },
    { year: 'OFFENSIVE', label: 'Certification CHE (Cybersécurité & Hacking Éthique)', detail: 'Pratique certifiée des techniques d\'intrusion éthique, audit de vulnérabilités applicatives (OWASP Top 10), durcissement d\'infrastructures et méthodologies de défense en profondeur.' },
    { year: 'MISSION', label: 'Conception & Déploiement DENTIVA & Plateforme Médicale', detail: 'Réalisation complète d\'une solution logicielle sécurisée pour la gestion de cabinets dentaires et la traçabilité infalsifiable des ordonnances avec respect strict de la confidentialité des données de santé.' },
  ];

  const timelineHTML = timeline.map((item, i) => `
    <div class="timeline-item" onclick="this.classList.toggle('open')">
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div class="timeline-dot" style="background:#00ff88;box-shadow:0 0 8px #00ff88;"></div>
        ${i < timeline.length - 1 ? '<div class="timeline-line" style="background:rgba(0,255,136,0.25);"></div>' : ''}
      </div>
      <div style="flex:1;">
        <div style="font-family:var(--font-mono);font-size:0.68rem;color:#00ff88;letter-spacing:0.08em;">[${item.year}]</div>
        <div class="timeline-label" style="font-weight:600;font-size:0.95rem;margin:0.2rem 0;color:var(--color-text);">${item.label}</div>
        <div class="timeline-detail" style="display:block;margin-top:0.35rem;">${item.detail}</div>
      </div>
    </div>
  `).join('');

  return panelShell({
    title: 'ACCÈS IDENTITÉ & PARCOURS',
    port: 'PORT 22 — SSH',
    accentColor: '#00ff88',
    content: `
      <p style="margin-bottom:1.5rem;font-size:0.95rem;">
        Consultant indépendant combinant une triple formation de pointe (Réseaux, Sécurité des Systèmes, IA & Big Data). 
        Mon approche s'articule autour d'une rigueur absolue : aucune complaisance technique, une discrétion totale sur les missions d'audit et une exigence sans compromis sur l'intégrité des infrastructures.
      </p>

      <div style="display:flex;gap:0.8rem;margin-bottom:2rem;flex-wrap:wrap;">
        <span style="font-family:var(--font-mono);font-size:0.72rem;padding:0.35rem 0.75rem;border:1px solid #00ff88;color:#00ff88;background:rgba(0,255,136,0.06);">&gt; PRÉCISION CHIRURGICALE</span>
        <span style="font-family:var(--font-mono);font-size:0.72rem;padding:0.35rem 0.75rem;border:1px solid #00ff88;color:#00ff88;background:rgba(0,255,136,0.06);">&gt; CONFIDENTIALITÉ STRICTE (NDA)</span>
        <span style="font-family:var(--font-mono);font-size:0.72rem;padding:0.35rem 0.75rem;border:1px solid #00ff88;color:#00ff88;background:rgba(0,255,136,0.06);">&gt; APPROCHE SUR-MESURE</span>
      </div>

      <h3 style="font-family:var(--font-mono);font-size:0.8rem;color:#00ff88;margin-bottom:1.2rem;letter-spacing:0.1em;">&gt; JOURNAL DE BORD OPÉRATIONNEL :</h3>
      <div style="margin-top:1rem;">
        ${timelineHTML}
      </div>

      <button class="panel-cta" style="color:#00ff88;border-color:#00ff88;margin-top:1.5rem;" onclick="window.panelManager?.open('certs')">
        <span>&gt; Consulter les accréditations & certifications</span>
      </button>
    `,
  });
}
