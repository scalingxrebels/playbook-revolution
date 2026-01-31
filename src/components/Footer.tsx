import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight, Linkedin, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const legalLinks = [
    { label: language === 'de' ? 'AGB' : 'Terms', href: '/agb' },
    { label: language === 'de' ? 'Datenschutz' : 'Privacy Policy', href: '/datenschutz' },
    { label: 'Impressum', href: '/impressum' },
  ];

  const sitemapLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Playbooks', href: '/playbooks' },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Cases', href: '/cases' },
    { label: 'About', href: '/about' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/scalingxhypergrowth/', icon: Linkedin },
    { label: 'YouTube', href: 'https://www.youtube.com/@ScalingXRebels', icon: Youtube },
    { label: 'Mail', href: 'mailto:info@scalingx.io', icon: Mail },
  ];

  const team = [
    { name: 'Michel Lason', role: 'Strategy. Scaling. Impact.', href: '/ml' },
    { name: 'Alban Halili', role: 'Growth. AI Solutions. Automation.', href: '/ah' },
    { name: 'Florian Metzger', role: 'RevOps. GTM. Venture Architect.', href: '/fm' },
  ];

  return (
    <footer className="border-t-2 border-border bg-card noise">
      {/* Top Section - Big Brand */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src="/images/scalingx-logo.png" alt="ScalingX" className="h-10 w-auto" />
            </div>
            <p className="text-xs uppercase tracking-widest text-accent mb-2">
              GROWTH ENGINES × SCALING SYSTEMS × AI = HYPERGROWTH
            </p>
            <p className="text-sm text-muted-foreground max-w-md mb-2">
              {language === 'de' 
                ? 'VC/PE-unterstützte Startups (Series A-D) skalieren schneller mit AI-Native Scaling und Systemen, die messbare Ergebnisse liefern.'
                : 'VC/PE-backed startups (Series A-D) scale faster with AI-Native Scaling and systems that deliver measurable outcomes.'}
            </p>
            <p className="text-sm text-muted-foreground max-w-md font-medium mb-4">
              {language === 'de' 
                ? 'Wachstum sollte kein Kampf sein. Es sollte System haben.'
                : "Growth shouldn't be a struggle. It should be a system."}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 lg:justify-end">
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient">80+</div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Companies Scaled
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient-accent">140+</div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Engagements
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-foreground">€2.5B+</div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Valuation
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">92%</div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Links Grid */}
      <div className="border-t-2 border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {/* Sitemap */}
            <div className="py-8 sm:pr-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Sitemap
              </h4>
              <ul className="space-y-3">
                {sitemapLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team */}
            <div className="py-8 sm:px-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Team
              </h4>
              <ul className="space-y-3">
                {team.map((member) => (
                  <li key={member.name} className="text-sm">
                    <Link 
                      to={member.href} 
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {member.name}
                    </Link>
                    <span className="text-muted-foreground ml-2 text-xs">/ {member.role}</span>
                  </li>
                ))}
              </ul>

              {/* AI-Native Scaling */}
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 mt-8">
                AI-Native Scaling
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/glossar" className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                    <span>{language === 'de' ? 'Glossar' : 'Glossary'}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="py-8 sm:pl-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                {language === 'de' ? 'Kontakt' : 'Contact'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#booking" className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                    Book a Call
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="mailto:team@scalingx.io" className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                    team@scalingx.io
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://lasr.io" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                    lasr.io
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-border bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              © {new Date().getFullYear()} ScalingX. {t('footer.rights')}.
            </p>

            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
