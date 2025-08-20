import { styled } from "../../../../../stitches.config";

export const Header = styled("h1", {
    fontWeight: 700,
    width: "100%",

    '@xl': {
        fontSize: "50pt",
    },
    '@sm': {
        fontSize: "35pt",
    }
})

export const StarsContainer = styled("div", {
    height: "100%",
    width: "100%",
    zIndex: -1,
    position: "absolute",
    transform: "translateX(-50%) translateY(-50%)",

    '@xl': {
        top: "50%",
        left: "80%",
    },

    '@sm': {
        top: "50%",
        left: "50%",

    }
})