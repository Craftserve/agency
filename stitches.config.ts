import { createStitches } from "@stitches/react";

export const { styled, getCssText, css } = createStitches({
    theme: {
        fonts: {
            ubuntu: "ubuntu",
        },
        colors: {
            black: "#0C0C0C",
            black80: "#0C0C0C2b",
            primary: "#6809EE",
            border: "#E1E6F1",
            gray: "#E1E6F1",
            success: "#73FF8D",
            warning: "#F9FF3C",
            danger: "#FF264A",
        },
        fontSizes: {
            xlg: "128px",
            lg: "64px",
            md: "20px",
            sm: "18px",
            xs: "16px",
        },
    },
    media: {
        sm: "(max-width: 1280px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 1023px)",
        xl: "(min-width: 1281px)",
        xxl: "(min-width: 1536px)",
    },
});
