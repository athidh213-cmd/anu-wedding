import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './config/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#22302a', green: '#2e4a3b', deep: '#1c2e24', cream: '#f5efe0', gold: '#b08a45', olive: '#6b7c4f', rose: '#b4584e' },
    fontFamily: { serif: ['var(--font-serif)', 'Georgia', 'serif'], sans: ['var(--font-sans)', 'Arial', 'sans-serif'] },
    boxShadow: { card: '0 12px 32px rgba(28, 46, 36, .07)', float: '0 20px 60px rgba(28, 46, 36, .15)' },
  } },
  plugins: [],
};
export default config;
