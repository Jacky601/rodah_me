import {
  Shield, BrainCircuit, Network, Code2, Server, Database, Terminal, Wifi, Cpu,
  FileSearch, Bug, Search, Lightbulb, Clock, MessageCircle, Users, Sparkles, Lock, Scale,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// Tout le texte du site est ici : modifie ce fichier, pas les composants.
// Les éléments marqués « À VÉRIFIER » sont des exemples à remplacer par tes vraies infos.
// ─────────────────────────────────────────────────────────────

export const personalInfo = {
  firstName: 'Rodolphe',
  lastName: 'EDAH',
  name: 'Rodolphe EDAH',
  brand: 'ROD_HACK',
  role: 'Software Engineer',
  headline: 'Software Engineer · En formation en Cybersécurité, Sécurité des Systèmes et Réseaux',
  location: 'Cotonou, Bénin',
  email: 'leaderrodolphe03@gmail.com',
  description:
    "Je conçois des logiciels solides et j'apprends à les attaquer pour mieux les défendre : pentest, systèmes, réseaux — avec un vrai faible pour l'IA et le Big Data.",
  whatsapp: '', // ex. 'https://wa.me/229XXXXXXXX' — À VÉRIFIER (vide = bouton caché)
  linkedin: 'https://www.linkedin.com/in/rodolphe-edah-03ba2734b/',
  github: '', // À VÉRIFIER
};

export const heroTags = ['Software Engineering', 'Pentest', 'Systèmes & Réseaux', 'IA & Big Data'];

// Qualités en orbite autour du hero
export const qualities = [
  { label: 'Curiosité', icon: Sparkles, color: '#FF2A2A' },
  { label: 'Rigueur', icon: Search, color: '#F5F5F5' },
  { label: 'Patience', icon: Clock, color: '#B80F0F' },
  { label: 'Partage', icon: MessageCircle, color: '#8A8A8A' },
  { label: 'Équipe', icon: Users, color: '#FF6B6B' },
  { label: 'Éthique', icon: Scale, color: '#3A3A3A' },
];

export const stats = [
  { value: '04', label: 'Domaines explorés' },
  { value: '24/7', label: 'Veille cyber' },
  { value: '100%', label: 'Éthique & légalité' },
  { value: '∞', label: "Envie d'apprendre" },
];

export const impacts = [
  {
    title: 'Du code pensé sécurité',
    description: "J'écris du logiciel en gardant l'attaquant en tête : validation, moindre privilège, secrets hors du code.",
  },
  {
    title: "Un regard d'attaquant",
    description: 'Reconnaissance, exploitation contrôlée, rapport clair : la méthode du pentest appliquée à vos projets.',
  },
  {
    title: 'La donnée comme levier',
    description: "Curieux de l'IA et du Big Data, je cherche toujours comment la donnée peut automatiser et éclairer.",
  },
];

// ─── SERVICES ────────────────────────────────────────────────
export const services = [
  {
    title: 'Développement logiciel & web',
    short: 'Des applications propres, typées et pensées pour durer.',
    description: 'Conception et développement d’applications web et logicielles, du modèle de données à l’interface.',
    icon: Code2,
    features: ['Applications web (React / TypeScript)', 'API REST & bases de données', 'Code testé et documenté'],
    deliverables: ['Code source complet & documenté', 'Déploiement en ligne'],
  },
  {
    title: 'Tests de sécurité (lab & CTF)',
    short: 'Trouver les failles avant les autres, dans un cadre autorisé.',
    description: 'Audit de sécurité d’applications web dans un périmètre autorisé, selon l’OWASP Top 10.',
    icon: Shield,
    features: ['Reconnaissance & cartographie', 'Tests OWASP Top 10', 'Rapport et pistes de correction'],
    deliverables: ['Rapport de vulnérabilités', 'Recommandations priorisées'],
  },
  {
    title: 'Systèmes & réseaux',
    short: 'Des infrastructures segmentées, surveillées et durcies.',
    description: 'Mise en place et durcissement de serveurs Linux et de petits réseaux.',
    icon: Network,
    features: ['Administration Linux', 'Segmentation (VLAN) & pare-feu', 'Supervision et journaux'],
    deliverables: ['Schéma réseau', 'Check-list de durcissement'],
  },
  {
    title: 'IA & données',
    short: 'Explorer, nettoyer et faire parler la donnée.',
    description: 'Préparation de données, petits modèles et automatisations autour de l’IA.',
    icon: BrainCircuit,
    features: ['Analyse et visualisation (Python)', 'Prototypes IA / agents', 'Pipelines de données'],
    deliverables: ['Notebook ou script reproductible', 'Synthèse des résultats'],
  },
];

export const processSteps = [
  { step: '01', title: 'Comprendre', meta: 'Cadrage · périmètre', desc: 'On fixe ensemble le besoin, le périmètre et les règles. En sécurité : rien sans autorisation écrite.', color: '#FF2A2A' },
  { step: '02', title: 'Explorer', meta: 'Recherche · reconnaissance', desc: "J'analyse l'existant, je cartographie et je repère les points faibles ou les opportunités.", color: '#F5F5F5' },
  { step: '03', title: 'Construire', meta: 'Développement · tests', desc: 'Code, configuration ou tests d’intrusion : itérations courtes et points réguliers.', color: '#B80F0F' },
  { step: '04', title: 'Transmettre', meta: 'Rapport · suivi', desc: 'Documentation claire, corrections priorisées et explications pour que vous restiez autonome.', color: '#7A7A7A' },
];

// ─── À PROPOS ────────────────────────────────────────────────
export const about = {
  title: 'Software Engineer.',
  intro: [
    "Je suis Rodolphe EDAH, Software Engineer basé à Cotonou, au Bénin. Je construis des applications, et je me forme aujourd'hui à la Cybersécurité, à la Sécurité des Systèmes et Réseaux.",
    "Le pentest m'a appris à regarder chaque système avec les yeux d'un attaquant : comprendre comment il casse pour mieux le protéger. Je pratique sur des labs et des plateformes de type CTF, toujours dans un cadre légal.",
    "À côté, je m'intéresse de près à l'IA et au Big Data. J'aime partager ce que j'apprends : j'ai animé des ateliers et des conférences sur les bases de l'IA et les agents IA.",
  ],
  highlights: ['Software Engineer', 'Pentest & sécurité offensive', 'IA & Big Data'],
  availability: 'Ouvert aux stages, alternances et projets · réponse sous 48h',
  values: [
    { icon: Lightbulb, title: 'Curiosité', description: 'Comprendre comment les choses marchent… et comment elles cassent.' },
    { icon: Lock, title: 'Éthique', description: 'Je teste uniquement ce que j’ai le droit de tester. Toujours.' },
    { icon: Search, title: 'Rigueur', description: 'Méthode, documentation, reproductibilité : pas de hasard.' },
    { icon: MessageCircle, title: 'Partage', description: 'Expliquer simplement ce que j’apprends, en atelier comme à l’écrit.' },
  ],
  // À VÉRIFIER : ajoute tes dates, écoles et entreprises exactes
  timeline: [
    { period: 'En cours', title: 'Formation — Cybersécurité, Sécurité des Systèmes et Réseaux', description: 'Sécurité offensive et défensive, administration systèmes, réseaux.' },
    { period: 'En cours', title: 'Pratique du pentest sur labs & CTF', description: 'Machines vulnérables, challenges web et réseau, prise de notes méthodique.' },
    { period: 'Récent', title: 'Ateliers & conférences IA', description: "Animation de sessions sur les bases de l'IA et les agents IA." },
    { period: 'Depuis', title: 'Software Engineer', description: 'Conception et développement d’applications web et logicielles.' },
  ],
};

// ─── PROJETS ─────────────────────────────────────────────────
// À VÉRIFIER : exemples de projets à remplacer par les tiens (titre, année, lien)
export const projects = [
  { title: 'Home lab pentest', category: 'Sécurité offensive', icon: Bug, year: '2026', description: 'Lab virtualisé avec machines vulnérables pour pratiquer reconnaissance, exploitation et rapport.', tags: ['Kali Linux', 'Nmap', 'Burp Suite'] },
  { title: 'Lab réseau segmenté', category: 'Réseau', icon: Wifi, year: '2026', description: 'Topologie avec VLAN, routage inter-VLAN et règles de pare-feu, puis tests de filtrage.', tags: ['Packet Tracer', 'VLAN', 'pfSense'] },
  { title: 'Write-ups CTF', category: 'CTF', icon: Terminal, year: '2026', description: 'Résolutions documentées de challenges web, crypto et forensics.', tags: ['Web', 'Forensics', 'Python'] },
  { title: 'Atelier Agents IA', category: 'IA', icon: Cpu, year: '2025', description: "Support et démo d'un atelier pour comprendre ce qu'est un agent IA et comment il agit.", tags: ['LLM', 'Agents', 'Pédagogie'] },
  { title: 'Pipeline de données', category: 'Big Data', icon: Database, year: '2025', description: 'Ingestion, nettoyage et analyse d’un jeu de données volumineux avec visualisations.', tags: ['Python', 'Pandas', 'SQL'] },
  { title: 'Application web full-stack', category: 'Software', icon: Server, year: '2025', description: 'Application avec authentification, base de données et bonnes pratiques de sécurité.', tags: ['React', 'TypeScript', 'Supabase'] },
];

// ─── COMPÉTENCES ─────────────────────────────────────────────
export const skillGroups = [
  { icon: Code2, category: 'Langages', items: 'Python · TypeScript · JavaScript · Bash · SQL' },
  { icon: Server, category: 'Développement', items: 'React · Node.js · API REST · Git / GitHub' },
  { icon: Shield, category: 'Sécurité offensive', items: 'Reconnaissance · OWASP Top 10 · Exploitation · Rapport' },
  { icon: Network, category: 'Systèmes & réseaux', items: 'Linux · TCP/IP · VLAN · Pare-feu · VPN' },
  { icon: FileSearch, category: 'Outils', items: 'Kali · Nmap · Burp Suite · Wireshark · Metasploit' },
  { icon: BrainCircuit, category: 'IA & Big Data', items: 'Pandas · Notebooks · LLM & agents · Visualisation' },
];

export const tools = [
  'Kali Linux', 'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'Python', 'TypeScript', 'React',
  'Linux', 'Git', 'Docker', 'SQL', 'Packet Tracer', 'Pandas',
];

// ─── BLOG ────────────────────────────────────────────────────
export const posts = [
  { title: "L'injection SQL expliquée simplement", category: 'Sécurité web', date: '2026', readTime: '8 min', excerpt: 'Comment une requête mal construite ouvre la porte à la base de données, et comment s’en protéger côté code.', hue: 0 },
  { title: 'Ma méthode de prise de notes en CTF', category: 'CTF', date: '2026', readTime: '6 min', excerpt: 'Reconnaissance, hypothèses, preuves : structurer ses notes pour progresser à chaque machine.', hue: 340 },
  { title: "Qu'est-ce qu'un agent IA ?", category: 'IA', date: '2025', readTime: '7 min', excerpt: "Objectif, outils, boucle d'action : les bases d'un agent IA, tirées de mes ateliers.", hue: 15 },
  { title: 'Segmenter un réseau : par où commencer', category: 'Réseau', date: '2025', readTime: '6 min', excerpt: 'Un réseau à plat est un réseau fragile. Premiers pas avec les VLAN et des règles de filtrage simples.', hue: 355 },
];

// ─── CONTACT ─────────────────────────────────────────────────
export const contactChannels = [
  { icon: Terminal, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Users, label: 'LinkedIn', value: 'Rodolphe EDAH', href: personalInfo.linkedin },
  { icon: Clock, label: 'Disponibilité', value: 'Réponse sous 48h', href: null },
];

export const socials = [
  { label: 'LinkedIn', href: personalInfo.linkedin },
  ...(personalInfo.github ? [{ label: 'GitHub', href: personalInfo.github }] : []),
  { label: 'Email', href: `mailto:${personalInfo.email}` },
];

// ─── GALERIE (« Moments forts du parcours ») ─────────────────
export const gallery = [
  { src: '/images/talk-audience.jpeg', caption: 'Conférence — Agents IA', tag: 'CONFÉRENCE' },
  { src: '/images/talk-ai-screen.jpeg', caption: "Atelier — Bases de l'IA", tag: 'FORMATION' },
  { src: '/images/talk-whiteboard.jpeg', caption: 'Session IA & Machine Learning', tag: 'FORMATION' },
  { src: '/images/talk-panel.jpeg', caption: 'Panel — Horizon du Digital', tag: 'CONFÉRENCE' },
  { src: '/images/team-standing.jpeg', caption: "L'équipe", tag: 'ÉQUIPE' },
  { src: '/images/talk-gesture.jpeg', caption: 'Démo live', tag: 'CONFÉRENCE' },
  { src: '/images/team-armchair.jpeg', caption: 'Entre passionnés', tag: 'ÉQUIPE' },
  { src: '/images/portrait-casual.jpeg', caption: 'Entre deux sessions', tag: 'COULISSES' },
];

export const navItems = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À propos' },
  { path: '/services', label: 'Services' },
  { path: '/projets', label: 'Projets' },
  { path: '/competences', label: 'Compétences' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];
