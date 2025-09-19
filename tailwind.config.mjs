/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        }
      },
      fontFamily: {
        sans: ['Prompt', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Kanit', 'sans-serif'],
        echo: ['Prompt', 'sans-serif'],
        brand: ['Kanit', 'sans-serif'],
      },
      backgroundImage: {
        'echo-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='15' stroke='%232563eb' stroke-width='1' fill='none'/%3E%3Ccircle cx='30' cy='30' r='10' stroke='%232563eb' stroke-width='1' fill='none'/%3E%3Ccircle cx='30' cy='30' r='5' fill='%232563eb'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'echo-gradient': 'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)',
        'wave-gradient': 'linear-gradient(to bottom, #eff6ff, #dbeafe)',
      }
    },
  },
  plugins: [],
}
