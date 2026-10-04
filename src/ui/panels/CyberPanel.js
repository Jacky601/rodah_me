import { panelShell } from './_panelTemplate.js';

export function buildCyberPanel() {
  const services = [
    {
      icon: '⚔',
      title: 'Audits de Sécurité & Tests d\'Intrusion (Pentest)',
      desc: 'Simulations d\'attaques réelles (Black Box, Grey Box, White Box) sur applications web, API, réseaux internes et périmètres externes. Identification des failles critiques (OWASP Top 10), élévation de privilèges et rapport exécutif avec plan de remédiation priorisé.',
    },
    {
      icon: '🛡',
      title: 'Durcissement des Systèmes & Protection Anti-Ransomware',
      desc: 'Blindage des serveurs Linux/Windows, segmentation du réseau, politiques de moindre privilège, désactivation des protocoles vulnérables et déploiement de règles de détection d\'anomalies.',
    },
    {
      icon: '📋',
      title: 'Conformité Réglementaire & Données Sensibles',
      desc: 'Accompagnement à la conformité RGPD et protection des données hautement sensibles (notamment données de santé HDS). Cartographie des flux, chiffrement bout-en-bout et traçabilité des accès.',
    },
    {
      icon: '🔄',
      title: 'Plans de Continuité & Reprise d\'Activité (PCA / PRA)',
      desc: 'Évaluation des points de défaillance uniques (SPOF), stratégie de sauvegarde immuable contre les cyberattaques, protocoles de reprise d\'urgence et tests en conditions réelles.',
    },
    {
      icon: '🎯',
      title: 'Sensibilisation & Tests Phishing Éthique',
      desc: 'Campagnes contrôlées de sensibilisation des collaborateurs aux attaques par ingénierie sociale, formations pratiques pour élever la vigilance collective de l\'entreprise.',
    },
  ];

  const servicesHTML = services.map(s => `
    <div class="service-card" style="border-left:3px solid #ff3366;">
      <span style="font-size:1.4rem;flex-shrink:0;color:#ff3366;">${s.icon}</span>
      <div>
        <strong style="color:#ff3366;font-size:0.95rem;">${s.title}</strong>
        <p style="margin-top:0.35rem;font-size:0.85rem;color:var(--color-text-muted);line-height:1.6;">${s.desc}</p>
      </div>
    </div>
  `).join('');

  return panelShell({
    title: 'AUDIT & CYBERSÉCURITÉ',
    port: 'PORT 443 — HTTPS / TLS 1.3',
    accentColor: '#ff3366',
    content: `
      <p style="margin-bottom:1.5rem;font-size:0.92rem;">
        Face à la recrudescence des cybermenaces ciblant les PME, cliniques et institutions, la sécurité ne peut être un simple ajout de façade. 
        J'interviens en amont pour éprouver vos défenses et en aval pour bâtir un environnement résilient.
      </p>

      <div style="margin-bottom:1.8rem;">
        ${servicesHTML}
      </div>

      <div style="padding:1rem;background:rgba(255,51,102,0.06);border:1px solid rgba(255,51,102,0.25);margin-bottom:1.5rem;">
        <p style="font-family:var(--font-mono);font-size:0.7rem;color:#ff3366;margin-bottom:0.3rem;">RÉFÉRENTIELS & CADRES DE TEST :</p>
        <p style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-muted);">
          OWASP Top 10 · PTES (Penetration Testing Execution Standard) · CIS Benchmarks · ISO 27001 · MITRE ATT&CK
        </p>
      </div>

      <button class="panel-cta" style="color:#ff3366;border-color:#ff3366;" onclick="window.panelManager?.open('contact')">
        <span>&gt; Demander un diagnostic ou un audit de sécurité</span>
      </button>
    `,
  });
}
