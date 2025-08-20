import { styled } from "./../../../../../stitches.config";
import type * as Stitches from "@stitches/react";

export const StyledCard = styled("div", {
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    padding: "0px 20px 30px 20px",
    fontSize: "$md",
    border: "2.5px solid ",
    overflowY: "hidden",
    backdropFilter: "blur(32px)",
    boxShadow: "0px 10px 5px rgba(0,0,0,0.1)",

    variants: {
        variant: {
            light: {
                backgroundColor: "rgba(225, 230, 241, 0.3)",
                color: "rgba(40, 28, 56, 0.8)",
                borderColor: "#E5E5E533",
            },
            dark: {
                backgroundColor: "rgba(59, 59, 59, 0.3)",
                color: "white",
                borderColor: "#E5E5E533",
            },
        },
    },

    "@tel": {
        maxWidth: "70%",
        minWidth: "200px",
    }
});

export const StyledCircleIcon = styled("div", {
    display: "block",
    height: "10px",
    width: "10px",
    borderRadius: "50%",

    variants: {
        color: {
            success: { backgroundColor: "$success" },
            warning: { backgroundColor: "$warning" },
            danger: { backgroundColor: "$danger" },
        },
    },
});

export const StyledTitle = styled("span", {
    fontWeight: "bold",
    padding: "0",
    margin: "0",
    lineHeight: "24px",
    textAlign: "left",
    marginTop: "5px",
});

export type CardVariants = Stitches.VariantProps<typeof StyledCard>;
