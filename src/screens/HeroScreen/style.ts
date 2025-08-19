import { styled } from "../../../stitches.config";
import BG from "../../assets/images/BG.svg";

const ImageWrapper = styled("div", {
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    direction: "row",
    height: "500px",
    width: "1000px",
    gap: "30px",
    backgroundImage: `url("${BG}")`,
});

export default ImageWrapper;
