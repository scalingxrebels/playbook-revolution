import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { key: 'nav.home', href: '/', label: 'Home', isRoute: true },
    { key: 'nav.solutions', href: '/solutions', label: 'Solutions', isRoute: true },
    { key: 'nav.playbooks', href: '/playbooks', label: 'Playbooks', isRoute: true },
    { key: 'nav.expertise', href: '/expertise', label: 'Expertise', isRoute: true },
    { key: 'nav.cases', href: '/cases', label: 'Cases', isRoute: true },
    { key: 'nav.about', href: '/about', label: 'About', isRoute: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors bg-white/95 shadow-sm backdrop-blur-md dark:bg-background/80 dark:backdrop-blur-xl dark:border-b dark:border-border dark:shadow-none">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/images/scalingx-logo.png" 
              alt="ScalingX" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Editorial Style */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.isRoute ? location.pathname === item.href : false;
              
              if (item.isRoute) {
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="relative z-10">
                      {item.label}
                    </span>
                    <span className="absolute inset-0 bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className={`absolute bottom-0 left-4 right-4 h-px bg-foreground transition-transform origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                );
              }
              
              return (
                <a
                  key={item.key}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  <span className="absolute inset-0 bg-muted/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            {/* CTA Button - Desktop Only */}
            <Button
              size="sm"
              className="hidden lg:flex bg-gradient-primary text-primary-foreground font-semibold shadow-brutal-sm hover-brutal text-xs uppercase tracking-wider gap-1"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Call
              <ArrowUpRight className="w-3 h-3" />
            </Button>

            <div className="w-px h-6 bg-border mx-2 hidden lg:block" />

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground px-3"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase">{language}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-background z-40 animate-fade-in">
            <div className="container px-4 py-8">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  if (item.isRoute) {
                    return (
                      <Link
                        key={item.key}
                        to={item.href}
                        className="flex items-center justify-between px-4 py-4 text-2xl font-display italic text-foreground hover:bg-muted/50 transition-colors border-b border-border"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                      </Link>
                    );
                  }
                  
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      className="flex items-center justify-between px-4 py-4 text-2xl font-display italic text-foreground hover:bg-muted/50 transition-colors border-b border-border"
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                    </a>
                  );
                })}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-8">
                <Button
                  size="lg"
                  className="w-full bg-foreground text-background font-semibold shadow-brutal hover-brutal"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book a Call
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
