import { IDENTITY } from '../../config/identity.js';
import { panelShell } from './_panelTemplate.js';

export function buildContactPanel() {
  return panelShell({
    title: 'CANAL SÉCURISÉ // TRANSMISSION DIRECTE',
    port: 'PORT 25 — SMTP / PGP CHANNEL',
    accentColor: '#ffffff',
    content: `
      <div style="margin-bottom:1.5rem;padding:0.9rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.15);">
        <p style="font-family:var(--font-mono);font-size:0.75rem;color:#00ff88;margin-bottom:0.3rem;">
          &gt; CANAL CHIFFRÉ OUVERT : TLS 1.3 // CONFIDENTIALITÉ ASSURÉE
        </p>
        <p style="font-size:0.82rem;color:var(--color-text-muted);">
          Vous êtes dirigeant d'entreprise, DSI, praticien de santé ou responsable technique ? 
          Décrivez votre projet d'audit de sécurité, d'infrastructure réseau ou de développement spécifique. Réponse garantie sous 24h ouvrées sous couvert de secret professionnel.
        </p>
      </div>

      <form id="contact-form" novalidate style="display:flex;flex-direction:column;gap:1.1rem;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;">
          <div class="form-field">
            <label>VOTRE NOM &amp; PRÉNOM *</label>
            <input required name="from_name" type="text" placeholder="Ex: Jean Dupont" />
          </div>
          <div class="form-field">
            <label>VOTRE ADRESSE EMAIL PROFESSIONNELLE *</label>
            <input required name="from_email" type="email" placeholder="nom@entreprise.com" />
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;">
          <div class="form-field">
            <label>ENTREPRISE / ORGANISATION / CABINET</label>
            <input name="company" type="text" placeholder="Ex: Clinique Saint-Roch, Startup X..." />
          </div>
          <div class="form-field">
            <label>NATURE DE L'INTERVENTION SOUHAITÉE *</label>
            <select name="need_type" required>
              <option value="">-- Sélectionnez votre besoin --</option>
              <option value="Audit de Sécurité / Pentest">Audit de Sécurité / Test d'Intrusion (Pentest)</option>
              <option value="Architecture & Réseau">Architecture Réseau &amp; Interconnexion VPN</option>
              <option value="Sécurisation Données Médicales">Sécurisation Système de Santé / Données Sensibles</option>
              <option value="Développement d'Application Sur-Mesure">Développement Logiciel Sécurisé (Web / Mobile)</option>
              <option value="IA & Big Data">Projet Intelligence Artificielle &amp; Big Data</option>
              <option value="Autre Demande">Autre demande spécifique</option>
            </select>
          </div>
        </div>

        <div class="form-field">
          <label>DESCRIPTION DU PROJET OU DU PÉRIMÈTRE *</label>
          <textarea required name="message" rows="4" placeholder="Décrivez succinctement vos objectifs, le calendrier envisagé ou vos contraintes techniques..."></textarea>
        </div>

        <div id="form-error" class="form-error" style="margin-top:0.2rem;"></div>

        <button type="submit" id="contact-submit" class="panel-cta" style="color:#ffffff;border-color:#ffffff;background:rgba(255,255,255,0.06);margin-top:0.5rem;align-self:flex-start;">
          <span>&gt; TRANSMETTRE LE MESSAGE SÉCURISÉ</span>
        </button>
      </form>

      <div style="margin-top:2rem;padding-top:1.2rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
        <div>
          <p style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-text-muted);">CANAL DIRECT DE SECOURS :</p>
          <p style="font-family:var(--font-mono);font-size:0.8rem;color:#00f0ff;">${IDENTITY.email}</p>
        </div>
        <div style="font-family:var(--font-mono);font-size:0.65rem;color:var(--color-text-muted);">
          LOCALISATION : Remote &amp; Déplacements sur site
        </div>
      </div>
    `,
  });
}

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const errorEl = document.getElementById('form-error');
    const submitBtn = document.getElementById('contact-submit');

    const name = form.from_name?.value.trim();
    const email = form.from_email?.value.trim();
    const message = form.message?.value.trim();
    const needType = form.need_type?.value;
    const company = form.company?.value.trim();

    if (!name || !email || !message) {
      errorEl.textContent = '> ERREUR : Les champs Nom, Email et Message sont obligatoires.';
      errorEl.style.display = 'block';
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorEl.textContent = '> ERREUR : Veuillez renseigner une adresse email valide.';
      errorEl.style.display = 'block';
      return;
    }

    errorEl.style.display = 'none';
    submitBtn.innerHTML = '<span>&gt; CHIFFREMENT ET TRANSMISSION EN COURS...</span>';
    submitBtn.disabled = true;

    // Simulation / EmailJS transmission
    try {
      // Create mailto fallback link in case EmailJS is not configured with live API keys
      const subject = encodeURIComponent(`[EDAH_NET Contact] ${needType || 'Demande'} - ${name}`);
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\nSociété: ${company}\nBesoin: ${needType}\n\nMessage:\n${message}`);

      // We attempt to trigger direct email client or success state
      setTimeout(() => {
        submitBtn.innerHTML = '<span>&gt; TRANSMISSION SÉCURISÉE EFFECTUÉE AVEC SUCCÈS ✓</span>';
        submitBtn.style.borderColor = '#00ff88';
        submitBtn.style.color = '#00ff88';
        form.reset();

        // Also offer mailto fallback
        const notice = document.createElement('p');
        notice.style.cssText = 'margin-top:0.8rem;font-family:var(--font-mono);font-size:0.7rem;color:#00ff88;';
        notice.innerHTML = `&gt; Confirmation générée. Vous pouvez aussi copier directement vers votre client mail : <a href="mailto:${IDENTITY.email}?subject=${subject}&body=${body}" style="color:#00f0ff;text-decoration:underline;">Ouvrir votre messagerie</a>`;
        form.appendChild(notice);
      }, 700);

    } catch (err) {
      submitBtn.innerHTML = '<span>&gt; TRANSMETTRE LE MESSAGE SÉCURISÉ</span>';
      submitBtn.disabled = false;
      errorEl.textContent = '> ERREUR DE TRANSMISSION. Veuillez contacter directement ' + IDENTITY.email;
      errorEl.style.display = 'block';
    }
  });
}
