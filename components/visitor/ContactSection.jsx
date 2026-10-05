"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-neutral-950/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full  text-red-500 font-mono text-xs tracking-wider uppercase mb-4">
              Prise de Contact
              </div>
              <h2 className="font-space font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
                Un projet critique ? Bâtissons une solution résiliente.
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-space">
                Que vous ayez besoin d'un audit de vulnérabilités approfondi, de restructurer votre topologie réseau d'entreprise ou de déployer une solution logicielle sécurisée conforme HDS/RGPD, échangeons en toute confidentialité.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-900 text-sm">
              <div className="flex items-center gap-3 text-neutral-300">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500">EMAIL PROFESSIONNEL</div>
                  <a href="mailto:contact@edah-consulting.net" className="font-mono text-white hover:text-red-400 transition-colors">
                    contact@edah-consulting.net
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500">DISPONIBILITÉ &amp; MOBILITÉ</div>
                  <div className="font-mono text-white">Missions en télétravail &amp; déplacements sur site</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500">CONFIDENTIALITÉ &amp; ENGAGEMENT</div>
                  <div className="font-mono text-white">Accords de non-divulgation (NDA)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-neutral-950 border border-neutral-800/90 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-red-500 mx-auto animate-bounce" />
                  <h3 className="font-space font-bold text-xl text-white">Message transmis avec succès</h3>
                  <p className="text-neutral-400 text-sm max-w-md mx-auto">
                    Merci pour votre message. Je vous recontacterai sous 24h ouvrées pour convenir d'un premier échange technique.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
                        Votre Nom *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Alexandre Dubois"
                        className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-600 text-sm font-space focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
                        Email Professionnel *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nom@organisation.com"
                        className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-600 text-sm font-space focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
                        Entreprise / Organisation
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Clinique Dentaire, Startup, DSI..."
                        className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-600 text-sm font-space focus:outline-none focus:border-red-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
                        Objet de la demande
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white text-sm font-space focus:outline-none focus:border-red-600 transition-colors">
                        <option>Audit de Sécurité / Pentest</option>
                        <option>Architecture &amp; Réseau Cisco</option>
                        <option>Développement Applicatif Sur-Mesure</option>
                        <option>Projet IA &amp; Big Data</option>
                        <option>Autre opportunité de collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-400 mb-2 uppercase tracking-wider">
                      Message &amp; Périmètre du projet *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Décrivez brièvement vos attentes, vos délais ou vos contraintes techniques..."
                      className="w-full px-4 py-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-600 text-sm font-space focus:outline-none focus:border-red-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-space text-sm font-semibold tracking-wide shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:shadow-[0_0_35px_rgba(220,38,38,0.8)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>{loading ? "Chiffrement et envoi en cours..." : "Transmettre la demande de contact"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
