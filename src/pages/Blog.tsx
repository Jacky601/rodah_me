import PageHeader from '../components/layout/PageHeader';
import BlogCard from '../components/home/BlogCard';
import CTA from '../components/layout/CTA';
import Reveal from '../components/motion/Reveal';
import { posts } from '../data/content';

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes &"
        highlight="articles."
        description="Ce que j'apprends en construisant et en cassant : sécurité web, CTF, réseaux, IA."
      />
      <section className="mx-auto max-w-[1200px] px-6 md:px-12">
        <ul className="grid gap-5 md:grid-cols-2">
          {posts.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={(i % 2) * 0.1} className="h-full">
                <BlogCard post={p} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <CTA />
    </>
  );
}
