module.exports = {
    content: [
        "./app/**/*.{js,jsx}",
    ],
    // safelist: ['font-rubikDirt'],
    theme: {
        extend: {
            fontFamily: {
                rubikDirt: ['var(--font-rubik-dirt)'],
                geist: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            },
            color:{
                foreground:"hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#4845d2",
                    foreground: "hsl(var(--primary-foreground))",
                },
            }
        }
    },
    plugins: [],
};