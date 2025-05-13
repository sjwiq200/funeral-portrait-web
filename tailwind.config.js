/** @type {import('tailwindcss').Config} */
const px0_200 = {
    ...Array.from(Array(201)).map((_, index) => {
        return index + `px`;
    }),
};
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontSize: px0_200,
            lineHeight: px0_200,
            textAlign: px0_200,
            gap: px0_200,
            borderRadius: px0_200,
            padding: px0_200,
            margin: px0_200,
        },
        screens: {
            xl: { max: "1280px" },
            lg: { max: "1024px" },
            md: { max: "768px" },
            sm: { max: "640px" },
        },
        colors: {
            white: "white",
            primary: "#4129FB",
        },
    },
    plugins: [],
};
