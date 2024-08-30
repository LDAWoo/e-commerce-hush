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
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "effect-cube": "effect-cube 1.2s infinite linear",
                "slide-down": "slide-down 0.5s ease forwards",
                "slide-up": "slide-up 0.5s ease forwards",
                "zoom-fade": "zoom-fade 2.5s cubic-bezier(.26, .54, .57, 1) forwards",
                "ride-up": "ride-up .8s cubic-bezier(.26, .54, .32, 1) forwards",
                "transform-up": "transform-up .4s cubic-bezier(.165,.84,.46, 1)",
                "fade-in": "fade-in 1s cubic-bezier(.26,.54,.32,1) 0s forwards",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
