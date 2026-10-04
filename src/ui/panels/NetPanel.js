import { panelShell } from './_panelTemplate.js';

export function buildNetPanel() {
  const tools = ['Cisco IOS', 'GNS3 / EVE-NG', 'Wireshark', 'pfSense / OPNsense', 'IPSec & WireGuard', 'VLAN 802.1Q', 'OSPF / BGP', 'Fortinet / Palo Alto'];

  const services = [
    {
      title: 'Conception d\'Architectures Réseau Haute Disponibilité',
      desc: 'Ingénierie LAN/WAN résiliente avec élimination des SPOF, agrégation de liens (LACP), spanning tree sécurisé, protocoles de passerelle redondante (HSRP/VRRP) et basculement automatique sans coupure.',
    },
    {
      title: 'Interconnexion Sécurisée Multi-Sites & VPN',
      desc: 'Déploiement de tunnels chiffrés IPSec et WireGuard pour relier des agences distantes, cliniques ou collaborateurs en télétravail avec authentification forte et chiffrement matériel.',
    },
    {
      title: 'Segmentation Réseau & Modèle Zero-Trust',
      desc: 'Cloisonnement étanche des flux : isolation des machines critiques, des dispositifs médicaux (IoT) et des postes administratifs via VLANs stricts, ACLs dynamiques et contrôle 802.1X.',
    },
    {
      title: 'Déploiement & Configuration Pare-feux Nouvelle Génération (NGFW)',
      desc: 'Mise en place de solutions de filtrage applicatif (Layer 7), inspection SSL approfondie, système de prévention des intrusions (IPS) et filtrage géographique/IP malveillantes.',
    },
    {
      title: 'Diagnostic Avancé, Audit & Analyse de Trafic',
      desc: 'Capture et analyse microscopique de paquets (Wireshark) pour identifier anomalies, goulots d\'étranglement de bande passante, fuites de données ou communications suspectes.',
    },
  ];

  const servicesHTML = services.map(s => `
    <div style="margin-bottom:1.2rem;padding:0.9rem;border-left:3px solid #0088ff;background:rgba(0,136,255,0.03);">
      <strong style="color:#0088ff;font-size:0.92rem;">${s.title}</strong>
      <p style="margin-top:0.3rem;font-size:0.85rem;color:var(--color-text-muted);line-height:1.6;">${s.desc}</p>
    </div>
  `).join('');

  return panelShell({
    title: 'ARCHITECTURE RÉSEAU & INFRASTRUCTURE',
    port: 'PORT 53 — DNS / ROUTING',
    accentColor: '#0088ff',
    content: `
      <p style="margin-bottom:1.5rem;font-size:0.92rem;">
        Fort d'une solide maîtrise validée par les certifications <strong>Cisco CCNA & CCNP</strong>, je conçois et optimise des infrastructures réseau robustes, capables d'encaisser des charges critiques tout en garantissant un niveau d'isolation maximal.
      </p>

      <div style="margin-bottom:1.8rem;">
        ${servicesHTML}
      </div>

      <div style="margin-top:1.5rem;padding:1rem;background:rgba(0,136,255,0.05);border:1px solid rgba(0,136,255,0.2);">
        <p style="font-family:var(--font-mono);font-size:0.7rem;color:#0088ff;margin-bottom:0.6rem;">ENVIRONNEMENTS TECHNIQUES & PROTOCOLES :</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
          ${tools.map(t => `<span style="font-family:var(--font-mono);font-size:0.68rem;padding:0.25rem 0.55rem;border:1px solid rgba(0,136,255,0.4);color:#0088ff;background:rgba(0,136,255,0.08);">${t}</span>`).join('')}
        </div>
      </div>

      <button class="panel-cta" style="color:#0088ff;border-color:#0088ff;" onclick="window.panelManager?.open('contact')">
        <span>&gt; Discuter d'un projet d'infrastructure réseau</span>
      </button>
    `,
  });
}
