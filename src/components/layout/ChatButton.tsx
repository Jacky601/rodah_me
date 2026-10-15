import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { personalInfo } from '../../data/content';

/** Bouton flottant en bas à droite : WhatsApp si renseigné, sinon page contact. */
export default function ChatButton() {
  const cls =
    'glass fixed bottom-6 right-6 z-50 hidden items-center gap-2.5 rounded-full py-3 pl-5 pr-6 font-secondary text-sm font-semibold text-foreground transition-colors hover:text-primary md:flex';
  const inner = (
    <>
      <MessageCircle size={18} className="text-primary" />
      Chat
    </>
  );
  return personalInfo.whatsapp ? (
    <a href={personalInfo.whatsapp} target="_blank" rel="noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link to="/contact" className={cls}>
      {inner}
    </Link>
  );
}
