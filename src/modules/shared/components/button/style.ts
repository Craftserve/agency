import { styled } from "./../../../../../stitches.config";

const ButtonStyle = styled("button", {
    height: 50,
    width: 100,
    backgroundColor: "$primary",
    color: "$gray",
    border: 0,
    padding: 10,
    borderRadius: 20,
    fontFamily: "$ubuntu",
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "ease-out 0.5s",

    "&:hover": {
        backgroundColor: "Aqua",
    },

    "&:active": {
        backgroundColor: "blue",
    },

    "&:focus-visible": {
        outline: 0,
    },
});

export default ButtonStyle;
