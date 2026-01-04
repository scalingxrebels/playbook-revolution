import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Twitter, Linkedin, Mail, BookOpen, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const links = [
    { label: t('footer.privacy'), href: '#' },
    { label: t('footer.terms'), href: '#' },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/company/scalingxhypergrowth/', label: 'LinkedIn' },
    { icon: <Github className="w-4 h-4" />, href: '#', label: 'GitHub' },
    { icon: <Mail className="w-4 h-4" />, href: 'mailto:hello@scalingstack.com', label: 'Email' },
  ];

  const authors = [
    { name: 'Michel Lason', role: 'Lead' },
    { name: 'Alban Halili', role: 'Co-Author' },
    { name: 'Florian Metzger', role: 'Co-Author' },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SX</span>
              </div>
              <span className="font-bold text-lg">ScalingX</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              {language === 'de' 
                ? 'Das AI-Native Scaling Playbook. Transformieren Sie Ihr Startup von linearem zu superlinearem Wachstum.'
                : 'The AI-Native Scaling Playbook. Transform your startup from linear to superlinear growth.'}
            </p>
            {/* Research Stats */}
            <div className="flex gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                <span>250,000+ {language === 'de' ? 'Wörter Forschung' : 'words of research'}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>n=22 {language === 'de' ? 'validiert' : 'validated'}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{language === 'de' ? 'Ressourcen' : 'Resources'}</h4>
            <ul className="space-y-2">
              <li><a href="#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">ROI Calculator</a></li>
              <li><a href="#frameworks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{language === 'de' ? 'Frameworks' : 'Frameworks'}</a></li>
              <li><a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{language === 'de' ? 'Fallstudien' : 'Case Studies'}</a></li>
              <li><a href="#scorecard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LASR.io Scorecard</a></li>
            </ul>
          </div>

          {/* Authors */}
          <div>
            <h4 className="font-semibold mb-4">{language === 'de' ? 'Autoren' : 'Authors'}</h4>
            <ul className="space-y-2">
              {authors.map((author) => (
                <li key={author.name} className="text-sm">
                  <span className="text-foreground">{author.name}</span>
                  <span className="text-muted-foreground"> • {author.role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{language === 'de' ? 'Kontakt' : 'Contact'}</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@scalingstack.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@scalingstack.com</a></li>
              <li><a href="https://scalingstack.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">scalingstack.com</a></li>
              <li><a href="https://lasr.io" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">lasr.io</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ScalingX. {t('footer.rights')}.
          </p>

          <div className="flex items-center gap-6">
            {/* Legal Links */}
            <div className="flex items-center gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
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
