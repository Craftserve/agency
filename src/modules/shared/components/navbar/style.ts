import { keyframes } from "@stitches/react";
import ButtonStyle from "../button/style";
import { styled } from "./../../../../../stitches.config";

const openMenu = keyframes({
    "0%": {
        transform: "scaleY(0)",
    },
    "100%": {
        transform: "scaleY(1s)",
    },
});

const closeMenu = keyframes({
    "0%": {
        transform: "scaleY(1)",
    },
    "100%": {
        transform: "scaleY(0)",
    },
});

export const NavbarStyle = styled("nav", {
    height: "66px",
    width: "100vw",
    backgroundColor: "white",
    fontSize: "$16",
    fontWeight: "900",
    letterSpacing: "-0.5px",
    fontFamily: "$ubuntu",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",

    ".logo-wrap": {
        height: "100%",
        width: "115px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        userSelect: "none",
    },

    ".logo-img": {
        height: "38px",
        width: "34px",
    },

    ".nav-menu": {
        backgroundColor: "$border",
        flexDirection: "column",
        width: "100%",
        position: "fixed",
        top: "66px",
        right: "0",
        listStyleType: "none",
        gap: "10px",
        padding: "10px 5px",
        transformOrigin: "top",

        li: {
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            button: {
                padding: "0",
            },
        },
        "@md": {
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            width: "250px",
            position: "unset",
            padding: "0",
            gap: "0",
        },
    },

    ".nav-link": {
        color: "$black",
        textDecoration: "none",
    },

    ".hamburger-menu": {
        "@lg": { display: "none" },
    },

    ".invisible": {
        display: "none",
    },

    ".visible": {
        display: "flex",
    },

    ".openMenu": {
        animation: `${openMenu} 0.5s forwards`,
    },

    ".closeMenu": {
        animation: `${closeMenu} 0.5s forwards`,
    },
});

export const HamburgerButton = styled(ButtonStyle, {
    backgroundColor: "$gray",
    height: "40px",
    width: "40px",
    fontSize: "30px",
    padding: "5px",

    "@md": {
        display: "none",
    },
});
