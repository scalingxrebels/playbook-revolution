import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight, BookOpen, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const links = [
    { label: t('footer.privacy'), href: '#' },
    { label: t('footer.terms'), href: '#' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/scalingxhypergrowth/' },
  ];

  const authors = [
    { name: 'Michel Lason', role: 'Strategy. Scaling. Impact.' },
    { name: 'Alban Halili', role: 'Growth. AI Solutions. Automation.' },
    { name: 'Florian Metzger', role: 'RevOps. GTM. Venture Architect.' },
  ];

  return (
    <footer className="border-t-2 border-border bg-card noise">
      {/* Top Section - Big Brand */}
      <div className="container max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          {/* Big Brand Text */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img src="/images/scalingx-logo.png" alt="ScalingX" className="h-10 w-auto" />
              <h2 className="font-display text-display-md italic text-foreground leading-none">
                Scaling<span className="text-accent">X</span><span className="text-gradient">.</span>
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest text-accent mb-2">
              EXPERTISE × SPEED = IMPACT
            </p>
            <p className="text-editorial text-muted-foreground max-w-md editorial-border">
              {language === 'de' 
                ? 'Wir liefern Systeme und schaffen Impact. Wachstum sollte kein Kampf sein, es sollte System haben.'
                : "We deliver systems and create impact. Growth shouldn't be a struggle, it should have a system."}
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 lg:justify-end">
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient">250K+</div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {language === 'de' ? 'Wörter Forschung' : 'Words Research'}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gradient-accent">n=22</div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {language === 'de' ? 'Validierte Cases' : 'Validated Cases'}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-foreground">16</div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {language === 'de' ? 'Dokumente' : 'Documents'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Links Grid */}
      <div className="border-t-2 border-border">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {/* Resources */}
            <div className="py-8 sm:pr-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                {language === 'de' ? 'Ressourcen' : 'Resources'}
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'ROI Calculator', href: '#calculator' },
                  { label: language === 'de' ? 'Frameworks' : 'Frameworks', href: '#frameworks' },
                  { label: language === 'de' ? 'Fallstudien' : 'Case Studies', href: '#cases' },
                  { label: 'θ_index Test', href: '#theta-assessment' },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Authors */}
            <div className="py-8 sm:px-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                {language === 'de' ? 'Autoren' : 'Authors'}
              </h4>
              <ul className="space-y-3">
                {authors.map((author) => (
                  <li key={author.name} className="text-sm">
                    <span className="text-foreground font-medium">{author.name}</span>
                    <span className="text-muted-foreground ml-2 text-xs">/ {author.role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="py-8 sm:px-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                {language === 'de' ? 'Kontakt' : 'Contact'}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:hello@scalingx.io" className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                    hello@scalingx.io
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="https://scalingx.io" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
                    scalingx.io
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

            {/* Social */}
            <div className="py-8 sm:pl-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                Social
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
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
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
