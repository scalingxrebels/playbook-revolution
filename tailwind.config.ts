import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"League Spartan"', 'system-ui', 'sans-serif'],
        heading: ['"League Spartan"', 'system-ui', 'sans-serif'],
        display: ['"League Spartan"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // LEVEL 1: Hero Headlines (League Spartan Bold/ExtraBold)
        'hero': ['clamp(2.5rem, 8vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'hero-lg': ['clamp(3rem, 10vw, 5.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        
        // LEVEL 2: Section Headlines (League Spartan SemiBold/Bold)
        'section': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section-sm': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        
        // LEVEL 3: Subsection Headlines (League Spartan SemiBold)
        'subsection': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
        
        // LEVEL 4: Body Text (DM Sans)
        'body-lg': ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['clamp(0.875rem, 1.2vw, 1rem)', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        
        // Subheadlines (DM Sans Medium/SemiBold)
        'subheadline': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '500' }],
        
        // CTAs (League Spartan Bold)
        'cta': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '700' }],
        
        // Navigation (DM Sans Medium)
        'nav': ['1rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '500' }],
        
        // Legacy display sizes (keeping for compatibility)
        'display-xl': ['clamp(4rem, 12vw, 10rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'editorial': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.4', letterSpacing: '0' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        mode: {
          traditional: "hsl(var(--mode-traditional))",
          "ai-powered": "hsl(var(--mode-ai-powered))",
          "ai-native": "hsl(var(--mode-ai-native))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-right": {
          from: { transform: "translateX(30px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-30px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "blur-in": {
          from: { filter: "blur(10px)", opacity: "0" },
          to: { filter: "blur(0)", opacity: "1" },
        },
        "reveal-up": {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-right": "slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in-left": "slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out",
        "blur-in": "blur-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "reveal-up": "reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)',
        'diagonal-lines': 'repeating-linear-gradient(45deg, transparent, transparent 10px, hsl(var(--border) / 0.3) 10px, hsl(var(--border) / 0.3) 11px)',
      },
      backgroundSize: {
        'grid-lg': '80px 80px',
        'grid-md': '40px 40px',
        'grid-sm': '20px 20px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
