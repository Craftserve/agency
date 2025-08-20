import { styled } from "../../../../../stitches.config";
import BG from "../../../../assets/images/BG.svg";

export const ImageWrapper = styled("div", {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url("${BG}")`,
    borderRadius: "30px",
    

    '@lg': {
        position: "relative",
        height: "600px",
        width: "1000px",
    },

    '@tel': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        width: "90%",
        padding: "50px 70px",
    }
});