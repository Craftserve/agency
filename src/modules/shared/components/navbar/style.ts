import ButtonStyle from "../button/style";
import { styled } from "./../../../../../stitches.config";

export const NavbarStyle = styled("nav", {
    height: "66px",
    width: "100%",
    backgroundColor: "white",
    fontSize: "$xs",
    fontWeight: "900",
    letterSpacing: "-0.5px",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",

    ".hamburger-menu": {
        "@lg": { display: "none" },
    },
});

export const LogoWrapStyle = styled("div", {
    height: "100%",
    width: "115px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    userSelect: "none",
});

export const LogoStyle = styled("img", {
    height: "38px",
    width: "34px",
});

export const MenuStyle = styled("div", {
    backgroundColor: "$border",
    width: "100%",
    position: "fixed",
    top: "66px",
    right: "0",
    maxHeightOrigin: "top",
    overflow: "hidden",
    maxHeight: "0px",
    transition: ".5s",

    "@md": {
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        width: "auto",
        position: "unset",
        padding: "0",
        gap: "0",
        maxHeight: "999px",
    },

    variants: {
        isOpen: {
            true: {
                maxHeight: "999px",
            },
        },
    },
});

export const MenuListStyle = styled("ul", {
    height: "100%",
    width: "100%",
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    padding: "10px 5px",

    "@md": {
        gap: "30px",
        flexDirection: "row",
    },
});

export const MenuItemStyle = styled("li", {
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    ".nav-link": {
        color: "$black",
        textDecoration: "none",
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
