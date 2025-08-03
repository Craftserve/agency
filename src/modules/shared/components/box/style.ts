import { styled } from "./../../../../../stitches.config";
import type * as Stitches from "@stitches/react";

const StyledBox = styled("div", {
    padding: "0",
    margin: "0",
    gap: "0",

    variants: {
        display: {
            flex: { display: "flex" },
            block: { display: "block" },
        },
        direction: {
            column: { flexDirection: "column" },
            row: { flexDirection: "row" },
        },
        justifyContent: {
            left: { justifyContent: "left" },
            center: { justifyContent: "center" },
            right: { justifyContent: "right" },
            spaceBetween: { justifyContent: "space-between" },
            spaceAround: { justifyContent: "space-around" },
        },
        alignItems: {
            start: { alignItems: "start" },
            center: { alignItems: "center" },
            end: { alignItems: "end" },
        },
    },
});

export type BoxVariants = Stitches.VariantProps<typeof StyledBox>;

export default StyledBox;
