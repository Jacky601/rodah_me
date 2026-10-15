import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/motion/Reveal';
import { personalInfo, contactChannels } from '../data/content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Ouvre le logiciel de messagerie du visiteur avec le message prérempli
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Contact — Portfolio')}&body=${encodeURIComponent(body)}`;
  };

  const field =
    'w-full rounded-2xl border border-border/10 bg-foreground/[0.03] px-5 py-4 font-secondary text-sm text-foreground placeholder:text-foreground/35 outline-none transition focus:border-primary/60 focus:bg-foreground/[0.05]';
  const label = 'mb-2 block font-label text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-foreground/55';

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de"
        highlight="votre projet."
        description="Stage, alternance, projet logiciel ou question sécurité : écrivez-moi, je réponds sous 48h."
      />

      <section className="mx-auto grid max-w-[1200px] gap-6 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-12">
        <Reveal>
          <ul className="space-y-3">
            {contactChannels.map((c) => {
              const Icon = c.icon;
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-label text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-foreground/50">{c.label}</span>
                    <span className="mt-1 block truncate font-secondary font-semibold">{c.value}</span>
                  </span>
                </>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="glass glass-hover flex items-center gap-4 rounded-[24px] p-5">
                      {content}
                    </a>
                  ) : (
                    <div className="glass flex items-center gap-4 rounded-[24px] p-5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass rounded-[32px] p-6 md:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={label}>Nom</label>
                <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Votre nom" className={field} />
              </div>
              <div>
                <label htmlFor="email" className={label}>Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="vous@exemple.com" className={field} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className={label}>Sujet</label>
              <input id="subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Stage, projet, question…" className={field} />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className={label}>Message</label>
              <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Décrivez votre besoin…" className={`${field} resize-none`} />
            </div>
            <button type="submit" className="pill-primary mt-7">
              Envoyer le message
              <span className="pill-icon">
                <ArrowUpRight size={15} />
              </span>
            </button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
