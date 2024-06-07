/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-1": "#1A1A1A",
                "dark-2": "#2F2F2F",
                "dark-3": "rgb(84 84 84 / 48%)",
                "dark-contrast": "#fde68a",
                primary: {
                    '50': '#fdfbe9',
                    '100': '#fbf6c6',
                    '200': '#f8eb90',
                    '300': '#f4d850',
                    '400': '#efc320',
                    '500': '#dfab13',
                    '600': '#c4870e',
                    '700': '#995f0f',
                    '800': '#7f4c14',
                    '900': '#6c3e17',
                    '950': '#3f1f09',
                },
            },
        },
    },
    plugins: [],
};
