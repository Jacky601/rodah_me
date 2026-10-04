import { panelShell } from './_panelTemplate.js';

export function buildCertsPanel() {
  function certCard({ code, title, institution, level, skills, accentColor }) {
    return `
    <div class="badge-card" style="--accent:${accentColor}">
      <div class="inner">
        <div class="badge-face" style="border-color:${accentColor};box-shadow:0 0 15px rgba(0,240,255,0.06);">
          <div style="font-family:var(--font-display);font-size:1.35rem;color:${accentColor};font-weight:900;margin-bottom:0.3rem;">${code}</div>
          <div style="font-size:0.75rem;font-weight:600;color:var(--color-text);margin-bottom:0.2rem;">${title}</div>
          <div style="font-size:0.65rem;color:var(--color-text-muted);">${institution}</div>
          <div style="font-family:var(--font-mono);font-size:0.6rem;color:#00ff88;margin-top:0.6rem;padding:0.15rem 0.4rem;border:1px solid rgba(0,255,136,0.4);border-radius:2px;">
            ${level}
          </div>
        </div>
        <div class="badge-face back" style="border-color:${accentColor};">
          <p style="font-family:var(--font-mono);font-size:0.65rem;color:${accentColor};font-weight:bold;margin-bottom:0.3rem;">&gt; DOMAINES VALIDÉS :</p>
          <p style="font-size:0.7rem;color:var(--color-text-muted);line-height:1.5;">${skills}</p>
        </div>
      </div>
    </div>`;
  }

  return panelShell({
    title: 'ACCRÉDITATIONS & TITRES ACADÉMIQUES',
    port: 'PORT 9000 — SYSTEM CLEARANCE',
    accentColor: '#00f0ff',
    content: `
      <p style="margin-bottom:1.5rem;font-size:0.92rem;">
        Survolez les badges ci-dessous pour retourner la carte et révéler le détail des compétences couvertes et vérifiables.
      </p>

      <h3 style="font-family:var(--font-mono);color:#00f0ff;font-size:0.8rem;letter-spacing:0.1em;margin-bottom:1rem;">
        &gt; CERTIFICATIONS PROFESSIONNELLES OFFICIELLES
      </h3>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;margin-bottom:2.2rem;">
        ${certCard({
          code: 'CHE',
          title: 'Hacking Éthique & Cybersécurité',
          institution: 'Certified Ethical Hacker',
          level: 'ACCRÉDITÉ OFFENSIF',
          skills: 'Méthodologies de pentesting professionnel, exploitation de vulnérabilités, évasion de défenses, sécurité réseau avancée, analyse de menaces et rapports d\'audit conformes aux standards internationaux.',
          accentColor: '#ff3366',
        })}
        ${certCard({
          code: 'CCNA',
          title: 'Cisco Certified Network Associate',
          institution: 'Cisco Systems',
          level: 'OFFICIEL CISCO',
          skills: 'Fondamentaux des réseaux d\'entreprise, adressage IPv4/IPv6, routage IP dynamique, commutation Ethernet (VLAN, STP), services IP (DHCP, NAT, NTP), sécurité des accès réseau et principes d\'automatisation.',
          accentColor: '#0088ff',
        })}
        ${certCard({
          code: 'CCNP',
          title: 'Cisco Certified Network Professional',
          institution: 'Cisco Systems',
          level: 'EXPERT INFRASTRUCTURE',
          skills: 'Routage avancé de niveau opérateur (OSPF multi-aires, BGP multi-homing), architectures campus haute densité, tunneling VPN complexe, sécurisation périmétrique, QoS et dépannage complexe.',
          accentColor: '#00f0ff',
        })}
      </div>

      <h3 style="font-family:var(--font-mono);color:#00ff88;font-size:0.8rem;letter-spacing:0.1em;margin-bottom:1rem;">
        &gt; DIPLÔMES ET FORMATIONS SUPÉRIEURES
      </h3>
      <div style="display:flex;flex-wrap:wrap;gap:1.2rem;">
        ${certCard({
          code: 'M.SSI',
          title: 'Master Sécurité Systèmes Info.',
          institution: 'Enseignement Supérieur',
          level: 'BAC+5 SPÉCIALISÉ',
          skills: 'Cryptographie avancée, sécurité des architectures distribuées, gouvernance SSI, analyse des risques ISO 27005, réponse aux incidents et analyse forensique.',
          accentColor: '#ff3366',
        })}
        ${certCard({
          code: 'M.IA',
          title: 'Master IA & Big Data',
          institution: 'Enseignement Supérieur',
          level: 'BAC+5 SPÉCIALISÉ',
          skills: 'Modèles de Deep Learning, fouille de données massives, architectures de streaming temps réel (Kafka, Spark), traitement du langage naturel (NLP) et algorithmes prédictifs.',
          accentColor: '#9b59b6',
        })}
        ${certCard({
          code: 'LICENCE',
          title: 'Licence Systèmes Info. & Logiciels',
          institution: 'SIL',
          level: 'BAC+3 FONDAMENTAL',
          skills: 'Génie logiciel, programmation orientée objet, conception de bases de données relationnelles, systèmes d\'exploitation POSIX et réseaux locaux.',
          accentColor: '#00ff88',
        })}
      </div>

      <div style="margin-top:2rem;text-align:center;">
        <button class="panel-cta" style="color:#00f0ff;border-color:#00f0ff;" onclick="window.panelManager?.open('contact')">
          <span>&gt; Vérifier des accréditations ou solliciter une intervention</span>
        </button>
      </div>
    `,
  });
}
