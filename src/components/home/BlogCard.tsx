import { ArrowRight } from 'lucide-react';
import TiltCard from '../motion/TiltCard';
import type { posts } from '../../data/content';

/** Carte d'article : visuel abstrait (plaques de verre) généré en CSS, puis méta, titre et extrait. */
export default function BlogCard({ post, index }: { post: (typeof posts)[number]; index: number }) {
  return (
    <TiltCard intensity={4} className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-[30px]">
      <div
        aria-hidden="true"
        className="relative aspect-[16/9] overflow-hidden"
        style={{
          background: `radial-gradient(70% 90% at ${20 + index * 18}% 100%, hsl(${post.hue} 90% 45% / 0.55), transparent 70%), linear-gradient(135deg, #111 0%, #1c0606 60%, #0a0a0a 100%)`,
        }}
      >
        {[0, 1, 2].map((k) => (
          <span
            key={k}
            className="absolute rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-sm transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-1"
            style={{ left: `${22 + k * 9}%`, top: `${20 + k * 10}%`, width: '42%', height: '46%', transform: `rotate(${(k - 1) * 6}deg)` }}
          />
        ))}
        <span className="absolute bottom-4 left-5 font-mono text-[0.65rem] text-white/50">~/{post.category.toLowerCase().replace(/\s+/g, '-')}</span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="font-label text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary">
          {post.category} <span className="ml-3 text-foreground/40">{post.date}</span>
          <span className="ml-3 text-foreground/40">{post.readTime}</span>
        </p>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.03em] transition-colors group-hover:text-primary">{post.title}</h3>
        <p className="mt-3 flex-1 font-secondary text-sm leading-relaxed text-foreground/60">{post.excerpt}</p>
        <p className="mt-6 inline-flex items-center gap-2 font-label text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-foreground/50">
          Bientôt en ligne <ArrowRight size={13} />
        </p>
      </div>
    </TiltCard>
  );
}
