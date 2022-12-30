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
            },
        },
    },
    plugins: [],
};
