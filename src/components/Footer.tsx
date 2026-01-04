import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const links = [
    { label: t('footer.privacy'), href: '#' },
    { label: t('footer.terms'), href: '#' },
  ];

  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/company/scalingxhypergrowth/', label: 'LinkedIn' },
    { icon: <Github className="w-4 h-4" />, href: '#', label: 'GitHub' },
    { icon: <Mail className="w-4 h-4" />, href: 'mailto:team@scalingx.io', label: 'Email' },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SX</span>
              </div>
              <span className="font-bold text-lg">ScalingX</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              The AI-Native Scaling Playbook. Transform your startup from linear to superlinear growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">ROI Calculator</a></li>
              <li><a href="#frameworks" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Frameworks</a></li>
              <li><a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#knowledge" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Knowledge Base</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:team@scalingx.io" className="text-sm text-muted-foreground hover:text-foreground transition-colors">team@scalingx.io</a></li>
              <li><a href="https://scalingx.io" className="text-sm text-muted-foreground hover:text-foreground transition-colors">scalingx.io</a></li>
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
