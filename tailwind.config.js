module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {},
    variants: {
        extend: { transform: ['hover', 'focus'] }
    },
    plugins: []
};
