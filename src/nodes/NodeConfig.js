export const NODE_CONFIG = [
  { id: 'hero',     label: '0xEDAH // CORE',  port: null,    color: 0x00f0ff, position: [0, 0, 0],      icon: '◈', radius: 1.2 },
  { id: 'about',    label: 'PORT 22 // SSH',  port: 'SSH',   color: 0x00ff88, position: [-9, 0, -6],    icon: '⌂', radius: 0.9 },
  { id: 'cyber',    label: 'PORT 443 // SSL', port: 'HTTPS', color: 0xff3366, position: [0, 0, -11],   icon: '⚔', radius: 0.9 },
  { id: 'net',      label: 'PORT 53 // DNS',  port: 'DNS',   color: 0x0088ff, position: [9, 0, -6],     icon: '⬡', radius: 0.9 },
  { id: 'dev',      label: 'PORT 8080 // IA', port: 'HTTP',  color: 0x9b59b6, position: [-9, 0, 6],     icon: '⌨', radius: 0.9 },
  { id: 'projects', label: 'PORT 3306 // DB', port: 'DB',    color: 0xff8c00, position: [0, 0, 11],     icon: '◉', radius: 0.9 },
  { id: 'certs',    label: 'PORT 9000 // SYS',port: 'SYS',   color: 0x00f0ff, position: [9, 0, 6],      icon: '✦', radius: 0.9 },
  { id: 'contact',  label: 'PORT 25 // SMTP', port: 'SMTP',  color: 0xffffff, position: [0, -4, 0],     icon: '✉', radius: 0.8 },
];

export const CONNECTIONS = [
  ['hero', 'about'],
  ['hero', 'cyber'],
  ['hero', 'net'],
  ['hero', 'dev'],
  ['hero', 'projects'],
  ['hero', 'certs'],
  ['hero', 'contact'],
  ['cyber', 'projects'],
  ['net', 'dev'],
  ['about', 'cyber'],
  ['certs', 'net'],
];
