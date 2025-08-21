import { styled } from "../../../../../stitches.config";

export const Header = styled("h1", {
    fontWeight: 700,
    width: "100%",

    "@xl": {
        fontSize: "50pt",
    },
    "@sm": {
        fontSize: "42pt",
    },
    "@xs": {
        fontSize: "35pt",
    },
});

export const StarsContainer = styled("div", {
    height: "100%",
    maxWidth: "400px",
    zIndex: -1,
    position: "absolute",
    transform: "translateX(0) translateY(-56%)",
    right: "10px",
    top: "50%",

    "@xl": {
        width: "400px",
    },

    "@sm": {
        width: "350px",
    },

    "@xs": {
        opacity: "0.5",
    },

    "@xxs": {
        right: "-30%",
    },
});
