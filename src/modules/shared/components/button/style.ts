import { styled } from "./../../../../../stitches.config";
import type * as Stitches from "@stitches/react";

const ButtonStyle = styled("button", {
    height: "54px",
    width: "183px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    borderRadius: "10px",
    border: 0,
    fontFamily: "$ubuntu",
    fontSize: "18px",

    variants: {
        color: {
            primary: {
                backgroundColor: "$black",
                color: "$border",
                fontWeight: "bolder",
                boxShadow: "0px 2px 6px black",

                "&:hover": {
                    background: "#0c0c0cee",
                },
            },
            secondary: {
                backgroundColor: "$border",
                color: "$black",
                fontWeight: "bolder",
            },
            outlined: {
                border: "1px solid $primary",
                backgroundColor: "transparent",
                color: "$primary",
                fontWeight: "bolder",
                textAlign: "left",
                gap: "12px",

                "&:hover": {
                    borderColor: "white",
                    backgroundColor: "$primary",
                    color: "white",
                },
            },
        },
    },
});

export type ButtonVariants = Stitches.VariantProps<typeof ButtonStyle>;

export default ButtonStyle;
