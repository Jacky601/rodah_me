import { panelShell } from './_panelTemplate.js';

export function buildProjectsPanel() {
  function projectCard({ title, subtitle, status, description, securityHighlights, networkHighlights, aiHighlights, tags }) {
    return `
    <div style="margin-bottom:2.2rem;padding:1.4rem;border:1px solid rgba(255,140,0,0.3);border-radius:3px;background:rgba(255,140,0,0.02);">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.8rem;margin-bottom:0.8rem;">
        <div>
          <h3 style="font-family:var(--font-display);color:#ff8c00;font-size:1.15rem;letter-spacing:0.05em;">${title}</h3>
          <p style="font-family:var(--font-mono);font-size:0.75rem;color:var(--color-text-muted);">${subtitle}</p>
        </div>
        <span style="font-family:var(--font-mono);font-size:0.65rem;padding:0.25rem 0.6rem;background:rgba(0,255,136,0.1);color:#00ff88;border:1px solid #00ff88;">
          ${status}
        </span>
      </div>

      <p style="font-size:0.88rem;color:var(--color-text);margin-bottom:1.2rem;line-height:1.65;">
        ${description}
      </p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:1rem;margin-bottom:1.2rem;">
        <div style="padding:0.8rem;background:rgba(255,51,102,0.05);border-left:2px solid #ff3366;">
          <p style="font-family:var(--font-mono);font-size:0.7rem;color:#ff3366;font-weight:bold;margin-bottom:0.4rem;">🔐 SÉCURITÉ & DONNÉES SENSIBLES :</p>
          ${securityHighlights.map(h => `<p style="font-size:0.78rem;color:var(--color-text-muted);margin-bottom:0.25rem;">→ ${h}</p>`).join('')}
        </div>

        ${networkHighlights ? `
        <div style="padding:0.8rem;background:rgba(0,136,255,0.05);border-left:2px solid #0088ff;">
          <p style="font-family:var(--font-mono);font-size:0.7rem;color:#0088ff;font-weight:bold;margin-bottom:0.4rem;">🌐 INFRASTRUCTURE & RÉSEAU :</p>
          ${networkHighlights.map(h => `<p style="font-size:0.78rem;color:var(--color-text-muted);margin-bottom:0.25rem;">→ ${h}</p>`).join('')}
        </div>
        ` : ''}

        ${aiHighlights ? `
        <div style="padding:0.8rem;background:rgba(155,89,182,0.05);border-left:2px solid #9b59b6;">
          <p style="font-family:var(--font-mono);font-size:0.7rem;color:#9b59b6;font-weight:bold;margin-bottom:0.4rem;">🤖 IA & ANALYSE DE FLUX :</p>
          ${aiHighlights.map(h => `<p style="font-size:0.78rem;color:var(--color-text-muted);margin-bottom:0.25rem;">→ ${h}</p>`).join('')}
        </div>
        ` : ''}
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
        ${tags.map(t => `<span style="font-family:var(--font-mono);font-size:0.65rem;padding:0.2rem 0.5rem;background:rgba(255,140,0,0.08);color:#ff8c00;border:1px solid rgba(255,140,0,0.3);">${t}</span>`).join('')}
      </div>
    </div>`;
  }

  return panelShell({
    title: 'PROJETS & ÉTUDES DE CAS DÉPLOYÉES',
    port: 'PORT 3306 — DATA REPOSITORY',
    accentColor: '#ff8c00',
    content: `
      <p style="margin-bottom:1.5rem;font-size:0.92rem;">
        Découvrez comment la théorie universitaire et les certifications de pointe se traduisent concrètement dans des applications déployées et exploitées en production.
      </p>

      ${projectCard({
        title: 'DENTIVA',
        subtitle: 'Système Intégré de Gestion de Cabinet Dentaire Sécurisé',
        status: '[PRODUCTION] DÉPLOYÉ EN CABINET',
        description: 'Solution logicielle complète pour la pratique dentaire : gestion des dossiers patients, planification chirurgicale des rendez-vous, traçabilité des actes médicaux, facturation et archivage crypté.',
        securityHighlights: [
          'Chiffrement fort AES-256 des données de santé au repos et TLS 1.3 en transit',
          'Contrôle d\'accès granulaire basé sur les rôles (RBAC : praticien, assistante, administrateur)',
          'Journal d\'audit inviolable enregistrant chaque consultation ou modification de dossier',
          'Conformité stricte aux exigences de protection des données médicales sensibles (HDS / RGPD)',
        ],
        networkHighlights: [
          'Déploiement sur VLAN isolé dédié pour scinder postes administratifs et fauteuils connectés',
          'Accès nomade sécurisé via passerelle VPN chiffrée avec double authentification (2FA)',
        ],
        tags: ['HealthTech', 'Chiffrement AES-256', 'VLAN', 'RBAC', 'HDS/RGPD', 'FullStack'],
      })}

      ${projectCard({
        title: 'PLATEFORME DE GESTION DES ORDONNANCES MÉDICALES',
        subtitle: 'Traçabilité, Authentification et Sécurisation Cryptographique des Prescriptions',
        status: '[PRODUCTION] ACTIF',
        description: 'Application critique conçue pour éradiquer la fraude et la falsification d\'ordonnances. Elle assure la délivrance sécurisée, la vérification instantanée par les officines et l\'horodatage certifié.',
        securityHighlights: [
          'Signature électronique cryptographique certifiée sur chaque prescription émise',
          'Code de vérification dynamique infalsifiable avec horodatage scellé',
          'Prévention totale de la double délivrance et détection de tentatives de falsification',
        ],
        aiHighlights: [
          'Module d\'assistance OCR intelligent pour la reconnaissance et l\'indexation de documents',
          'Contrôle algorithmique des posologies et alerte sur les interactions médicamenteuses critiques',
        ],
        tags: ['Cryptographie', 'Signature Numérique', 'Anti-Fraude', 'OCR / IA', 'Traçabilité'],
      })}

      <div style="text-align:center;margin-top:2rem;">
        <button class="panel-cta" style="color:#ff8c00;border-color:#ff8c00;" onclick="window.panelManager?.open('contact')">
          <span>&gt; Vous avez un projet similaire ? Initier un échange</span>
        </button>
      </div>
    `,
  });
}
