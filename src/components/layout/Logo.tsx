import { personalInfo } from '../../data/content';

/** Logo typographique : « RODHACK_ » avec le tiret bas en rouge. */
export default function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`font-logo tracking-[0.08em] text-foreground ${className}`}>
      {personalInfo.brand.replace('_', '')}
      <span className="text-primary">_</span>
    </span>
  );
}
