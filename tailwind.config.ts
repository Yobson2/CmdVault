
import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
	],
	prefix: "",
    theme:{
        container: {
        center: true,
        padding: "2rem",
        screens: {
            "2xl": "1400px",
                 },
        },
        extend:{
            colors:{
                // ShadcnUI semantic colors from CSS variables
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: "hsl(var(--card))",
                "card-foreground": "hsl(var(--card-foreground))",
                popover: "hsl(var(--popover))",
                "popover-foreground": "hsl(var(--popover-foreground))",
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                secondary: "hsl(var(--secondary))",
                "secondary-foreground": "hsl(var(--secondary-foreground))",
                muted: "hsl(var(--muted))",
                "muted-foreground": "hsl(var(--muted-foreground))",
                accent: "hsl(var(--accent))",
                "accent-foreground": "hsl(var(--accent-foreground))",
                destructive: "hsl(var(--destructive))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                // Brand colors from CSS variables
                brand: "hsl(var(--brand))",
                "brand-foreground": "hsl(var(--brand-foreground))",
                "brand-secondary": "hsl(var(--brand-secondary))",
                "brand-dark": "hsl(var(--brand-dark))",
            }
        }
    },

	   plugins: [],
} satisfies Config;


export default config