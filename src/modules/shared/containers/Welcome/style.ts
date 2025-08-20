import { styled } from "../../../../../stitches.config";

export const Header = styled("span", {
    fontWeight: 700,

    '@lg': {
        fontSize: "50pt",
    },
    '@tel': {
        fontSize: "35pt",
    }
})

export const StarsContainer = styled("div", {
    width: "100%",
    height: "100%",
    zIndex: -1,
    position: "absolute",
    transform: "translateX(-50%) translateY(-50%)",

    '@lg': {
        top: "50%",
        left: "80%",
    },

    '@tel': {
        top: "50%",
        left: "50%",
        opacity: "0.5",
    }
})