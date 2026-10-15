interface PageHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, highlight, description }: PageHeaderProps) {
  return (
    <header className="relative mx-auto max-w-[1200px] px-6 pb-14 pt-36 md:px-12 md:pt-44">
      <p className="hero-fade eyebrow">{eyebrow}</p>
      <h1 className="hero-fade mt-5 font-display text-5xl font-extrabold tracking-[-0.045em] [animation-delay:80ms] md:text-8xl">
        {title}
        {highlight && <> <span className="text-primary">{highlight}</span></>}
      </h1>
      {description && (
        <p className="hero-fade mt-6 max-w-2xl font-secondary text-base leading-relaxed text-foreground/65 [animation-delay:160ms] md:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
