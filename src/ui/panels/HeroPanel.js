import { IDENTITY } from '../../config/identity.js';
import { panelShell } from './_panelTemplate.js';

export function buildHeroPanel() {
  return panelShell({
    title: `${IDENTITY.pseudo} // CORE SYSTEM`,
    port: 'ROOT ACCESS',
    accentColor: '#00f0ff',
    content: `
      <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;margin-bottom:1.5rem;">
        <div style="width:110px;height:110px;border-radius:4px;border:1px solid #00f0ff;overflow:hidden;flex-shrink:0;box-shadow:0 0 15px rgba(0,240,255,0.2);">
          <img src="/assets/images/hero-polygon.jpeg" alt="${IDENTITY.fullName}" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div>
          <h1 style="font-family:var(--font-display);font-size:1.8rem;letter-spacing:0.05em;margin-bottom:0.3rem;">${IDENTITY.fullName}</h1>
          <p style="font-family:var(--font-mono);color:var(--color-text-muted);font-size:0.85rem;margin-bottom:0.5rem;">${IDENTITY.title}</p>
          <div style="display:inline-block;padding:0.25rem 0.6rem;background:rgba(0,240,255,0.08);border:1px solid #00f0ff;font-family:var(--font-mono);font-size:0.65rem;color:#00f0ff;">
            &gt; CONSEIL · AUDIT · DÉPLOIEMENT INFRASTRUCTURE
          </div>
        </div>
      </div>

      <blockquote style="border-left:3px solid #00f0ff;padding:0.8rem 1rem;background:rgba(0,240,255,0.04);margin-bottom:1.5rem;font-style:italic;color:var(--color-text-muted);font-size:0.9rem;">
        "${IDENTITY.slogan}"
      </blockquote>

      <p style="margin-bottom:1.2rem;font-size:0.95rem;color:var(--color-text);">
        Bienvenue dans <strong>EDAH_NET</strong>, simulation interactive de mon infrastructure de compétences et de services. 
        En tant qu'ingénieur et consultant spécialisé dans la convergence du <strong>Réseau</strong>, de la <strong>Cybersécurité</strong> et de l'<strong>Intelligence Artificielle</strong>, 
        j'accompagne les organisations dans la sécurisation de leurs flux critiques et le déploiement d'architectures résilientes.
      </p>

      <div style="margin:1.5rem 0;padding:1rem;background:rgba(8,11,16,0.8);border:1px solid rgba(0,240,255,0.2);border-radius:2px;">
        <p style="font-family:var(--font-mono);font-size:0.7rem;color:#00f0ff;margin-bottom:0.4rem;">&gt; NAVIGATION TOPOLOGIQUE :</p>
        <p style="font-size:0.82rem;color:var(--color-text-muted);">
          Chaque port de la topologie 3D ouvre une partition dédiée :
          <span style="color:#00ff88;">PORT 22 (Identité)</span> · 
          <span style="color:#ff3366;">PORT 443 (Cybersécurité)</span> · 
          <span style="color:#0088ff;">PORT 53 (Réseau)</span> · 
          <span style="color:#9b59b6;">PORT 8080 (Dev & IA)</span> · 
          <span style="color:#ff8c00;">PORT 3306 (Projets Déployés)</span> · 
          <span style="color:#00f0ff;">PORT 9000 (Certifications)</span> · 
          <span style="color:#ffffff;">PORT 25 (Canal Sécurisé)</span>.
        </p>
      </div>

      <div style="display:flex;gap:1rem;flex-wrap:wrap;">
        <button class="panel-cta" style="color:#00f0ff;border-color:#00f0ff;" onclick="window.panelManager?.open('contact')">
          <span>&gt; Initier un canal sécurisé</span>
        </button>
        <button class="panel-cta" style="color:#ff3366;border-color:#ff3366;" onclick="window.panelManager?.open('cyber')">
          <span>&gt; Voir les audits de sécurité</span>
        </button>
      </div>
    `,
  });
}
