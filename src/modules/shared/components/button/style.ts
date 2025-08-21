import { styled } from "./../../../../../stitches.config";
import type * as Stitches from "@stitches/react";

const StyledButton = styled("button", {
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    borderRadius: "10px",
    border: 0,
    fontSize: "$sm",
    cursor: "pointer",

    variants: {
        variant: {
            primary: {
                backgroundColor: "$black",
                color: "$border",
                fontWeight: "bolder",
                boxShadow: "0px 6px 5px rgba(0, 0, 0, 0.33)",

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

export type ButtonVariants = Stitches.VariantProps<typeof StyledButton>;

export default StyledButton;
