import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
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
        glass: {
          bg: "hsl(var(--glass-bg))",
          border: "hsl(var(--glass-border))",
        },
        apple: {
          blue: "hsl(var(--apple-blue))",
          green: "hsl(var(--apple-green))",
          indigo: "hsl(var(--apple-indigo))",
          orange: "hsl(var(--apple-orange))",
          pink: "hsl(var(--apple-pink))",
          purple: "hsl(var(--apple-purple))",
          red: "hsl(var(--apple-red))",
          teal: "hsl(var(--apple-teal))",
          yellow: "hsl(var(--apple-yellow))",
          magenta: "hsl(var(--apple-magenta))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        "2xl": "16px",
        "3xl": "22px",
        "4xl": "28px",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "SF Pro Text", "Helvetica Neue", "sans-serif"],
        display: ["Inter", "-apple-system", "BlinkMacSystemFont", "SF Pro Display", "sans-serif"],
      },
      fontSize: {
        // Apple Typography Scale
        "2xs": ["11px", { lineHeight: "1.2", letterSpacing: "0.01em" }],
        xs: ["12px", { lineHeight: "1.33", letterSpacing: "0" }],
        sm: ["14px", { lineHeight: "1.43", letterSpacing: "-0.006em" }],
        base: ["17px", { lineHeight: "1.47", letterSpacing: "-0.022em" }],
        lg: ["20px", { lineHeight: "1.4", letterSpacing: "-0.012em" }],
        xl: ["24px", { lineHeight: "1.33", letterSpacing: "-0.016em" }],
        "2xl": ["28px", { lineHeight: "1.29", letterSpacing: "-0.021em" }],
        "3xl": ["34px", { lineHeight: "1.21", letterSpacing: "-0.022em" }],
        "4xl": ["40px", { lineHeight: "1.15", letterSpacing: "-0.024em" }],
        "5xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.024em" }],
      },
      keyframes: {
        // iOS Spring Physics
        "spring-fade-in": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(8px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "spring-scale-in": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.96)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1)" 
          },
        },
        "spring-slide-up": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(12px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "ios-sheet-up": {
          "0%": { 
            opacity: "0", 
            transform: "translateY(100%)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          },
        },
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "subtle-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        // iOS Spring Animations
        "spring-fade-in": "spring-fade-in 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "spring-scale-in": "spring-scale-in 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "spring-slide-up": "spring-slide-up 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "ios-sheet-up": "ios-sheet-up 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "accordion-down": "accordion-down 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "accordion-up": "accordion-up 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "subtle-pulse": "subtle-pulse 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "ios-spring": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "ios-ease": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "180": "180ms",
        "350": "350ms",
        "400": "400ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;