/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F5F7F5', // Soft Nurturing Green-White
                primary: '#4A6B53', // Deep Forest/Sage Green
                accent: '#8A5A53', // Deep Rosewood (kept the warm accent)
                textDark: '#2C362F', // Deep Green-Charcoal
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
                drama: ['"Cormorant Garamond"', 'serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
