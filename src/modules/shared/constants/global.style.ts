import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
    },
    body: {
        display: "flex",
        justifyContent: "center",
        fontFamily: "$ubuntu",
        width: "100vw",
        height: "100vh"
    },
});
