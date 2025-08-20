import { styled } from "../../../../../stitches.config";

export const Header = styled("span", {
    fontWeight: 700,
    width: "100%",

    '@xl': {
        fontSize: "50pt",
    },
    '@tel': {
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

    '@tel': {
        top: "50%",
        left: "50%",

    }
})