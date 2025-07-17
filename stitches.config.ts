import { createStitches } from "@stitches/react";

export const { styled, getCssText, css } = createStitches({
    theme: {
        fonts: {
            ubuntu: "ubuntu",
        },
        colors: {
            black: "#0C0C0C",
            primary: "#6809EE",
            border: "#E1E6F1",
            gray: "#E1E6F1",
            success: "#73FF8D",
            warning: "#F9FF3C",
            danger: "#FF264A",
        },
        fontSizes: {
            64: "64px",
            20: "20px",
            16: "16px",
        },
    },
});
