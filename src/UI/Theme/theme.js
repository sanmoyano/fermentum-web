import { extendTheme, theme } from "@chakra-ui/react";
import(
    "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700;900&display=swap"
);

export default extendTheme({
    colors: {
        brand: {
            100: "#0d0d0d",
            200: "#1d1d1d",
            300: "#2d2d2d",
            400: "#d9ad5b",
            500: "#f5f5f5",
            600: "#8be234",
            700: "transparent",
            800: "#9ecc46",
            900: "#742b90",
        },
    },
    fonts: {
        body: "Montserrat, sans-serif",
        heading: "Bebas Neue, cursive",
    },
    fontWeights: {
        body: 400,
        heading: 700,
        links: 700,
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
    },
    components: {
        Button: {
            baseStyle: {
                fontFamily: "body",
                fontWeight: "links",
                fontSize: "md",
                padding: "0.5rem 1rem",
                borderRadius: "0.2rem",
                cursor: "pointer",
                textTransform: "uppercase",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                    backgroundColor: "brand.400",
                },
            },
        },
        Stack: {
            baseStyle: {
                marginTop: "0rem",
            },
        },
    },
});
