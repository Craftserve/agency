import { styled } from "./../../../../../stitches.config";

const ButtonStyle = styled("button", {
    height: 50,
    width: 100,
    backgroundColor: "$primary",
    color: "$faded",
    border: 0,
    padding: 10,
    borderRadius: 20,
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "ease-out 0.5s",

    "&:hover": {
        backgroundColor: "Aqua",
    },

    "&:active": {
        backgroundColor: "blue",
    },
});

export default ButtonStyle;
