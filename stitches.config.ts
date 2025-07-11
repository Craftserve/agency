import { createStitches } from "@stitches/react";

export const { styled, getCssText, css } = createStitches({
    theme: {
        fonts: {
            system: "Inter, apple-system, sans-serif",
        },
        colors: {
            primary: "#0275d8",
            success: "#5cb85c",
            info: "#5bc0de",
            warning: "#f0ad4e",
            danger: "#d9534f",
            inverse: "#292b2c",
            faded: "#f7f7f7",
        },
        fontSizes: {},
    },
});
