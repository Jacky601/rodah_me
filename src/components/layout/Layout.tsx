import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatButton from './ChatButton';
import Aura from '../motion/Aura';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Lumières d'ambiance + grain discret */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_0%,rgb(var(--glow)/0.16),transparent_70%),radial-gradient(50%_45%_at_100%_100%,rgb(var(--glow)/0.10),transparent_70%)]" />
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgb(var(--border)/0.06)_1px,transparent_1px)] [background-size:3px_3px]" />
      </div>
      <Aura />

      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Aller au contenu
      </a>
      <Header />
      <Navbar />
      <ChatButton />

      <main id="contenu" className="relative z-10 md:pr-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
