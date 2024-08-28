module.exports = {
    darkMode: 'class',
    content: [
        './assets/**/*.{xml,html,js}',
        'index.html',
    ],
    theme: {
        extend: {
            colors: {
            },
            fontFamily: {
                sans: '"Arial", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            }
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}