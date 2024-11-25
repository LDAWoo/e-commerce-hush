import type { Config } from "tailwindcss";

const config = {
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
                twentieth: ["var(--font-twentieth)"],
            },
            colors: {
                skeleton: "hsl(var(--skeleton-background))",
                rating: "hsl(var(--rating-review))",
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
                "secondary-hover": {
                    DEFAULT: "hsl(var(--secondary-hover))",
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
                tooltip: {
                    DEFAULT: "hsl(var(--tooltip))",
                    foreground: "hsl(var(--tooltip-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            boxShadow: {
                "shadow-border-xs": "0 0 0 1px hsl(var(--input))",
                "shadow-border-sm": "0 0 0 2px hsl(var(--primary))",
            },
            backgroundImage: {
                "shine-gradient": "linear-gradient(to right, transparent, var(--tw-gradient-stops), transparent)",
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0",
                        opacity: "0",
                        transform: "translateY(40px)",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                    to: {
                        height: "0",
                        opacity: "0",
                        transform: "translateY(40px)",
                    },
                },
                "effect-cube": {
                    from: {
                        transform: "translateY(0) rotateY(0deg)",
                    },
                    to: {
                        transform: "translateY(0) rotateY(360deg)",
                    },
                },
                "slide-down": {
                    from: {
                        transform: "translateY(-20px)",
                        opacity: "0",
                    },
                    to: {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
                "slide-up": {
                    from: {
                        transform: "translateY(0px)",
                        opacity: "1",
                    },
                    to: {
                        transform: "translateY(-20px)",
                        opacity: "0",
                    },
                },
                "zoom-fade": {
                    from: {
                        transform: "scale(1.3)",
                        opacity: "0",
                    },
                    to: {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                },
                "ride-up": {
                    from: {
                        transform: "translateY(120%)",
                        opacity: "1",
                    },
                    to: {
                        transform: "translateY(0px)",
                        opacity: "1",
                    },
                },
                "transform-up": {
                    from: {
                        transform: "translateY(-120%)",
                        opacity: "1",
                    },
                    to: {
                        transform: "translateY(0px)",
                        opacity: "1",
                    },
                },
                "fade-in": {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
                shine: {
                    to: {
                        left: "-200%",
                    },
                },
                loading: {
                    "0%": {
                        strokeDasharray: "1, 150",
                        strokeDashoffset: "0",
                    },
                    "50%": {
                        strokeDasharray: "90, 150",
                        strokeDashoffset: "-35",
                    },
                    "100%": {
                        strokeDasharray: "90, 150",
                        strokeDashoffset: "-124",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down .4s cubic-bezier(.25,.46,.45,.94)",
                "accordion-up": "accordion-up .4s cubic-bezier(.25,.46,.45,.94)",
                shine: "shine .75s cubic-bezier(.01,.56, 1, 1)",
                "effect-cube": "effect-cube 1.2s infinite linear",
                "slide-down": "slide-down 0.5s ease forwards",
                "slide-up": "slide-up 0.5s ease forwards",
                "zoom-fade": "zoom-fade 2.5s cubic-bezier(.26, .54, .57, 1) forwards",
                "ride-up": "ride-up .8s cubic-bezier(.26, .54, .32, 1) forwards",
                "transform-up": "transform-up .4s cubic-bezier(.165,.84,.46, 1)",
                "fade-in": "fade-in 1s cubic-bezier(.26,.54,.32,1) 0s forwards",
                loading: "loading 1.5s ease-in-out infinite",
                "spin-slow": "spin 1.5s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
