import { styled } from "./../../../../../stitches.config";
import type * as Stitches from "@stitches/react";

export const StyledCard = styled("div", {
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    padding: "0px 20px 30px 20px",
    fontSize: "$md",
    border: "2.5px solid",
    overflowY: "auto",

    variants: {
        variant: {
            light: {
                backgroundColor: "#fffff",
                color: "$black",
                borderColor: "#ededed",
            },
            gray: {
                backgroundColor: "Gray",
                color: "white",
                borderColor: "LightGray",
            },
        },
    },
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
});

export type CardVariants = Stitches.VariantProps<typeof StyledCard>;
