import { styled } from "../../../../../stitches.config";
import BG from "../../../../assets/images/BG.svg";

export const ImageWrapper = styled("div", {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url("${BG}")`,
    borderRadius: "30px",

    '@xl': {
        position: "relative",
        height: "600px",
        width: "1000px",
    },

    '@sm': {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        width: "100%",
        padding: "50px 70px",
    },

    '@xs': {
        width: "90%",
    }
});

export const FirstCard = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@sm": {
        maxWidth: "70%",
        minWidth: "250px",
    },
    '@xl': {
        position: "absolute", 
        top: 30, 
        left: 30, 
    }
})

export const SecondCard = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@sm": {
        maxWidth: "70%",
        minWidth: "250px",
    },
    '@xl': {
        position: "absolute", 
        top: "35%", 
        left: "96%", 
        transform: "translateY(-50%) translateX(-50%)",
    }
})

export const ThirdCard = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@sm": {
        maxWidth: "70%",
        minWidth: "250px",
    },
    '@xl': {
        position: "absolute", 
        top: "60%", 
        left: "56.5%", 
        transform: "translateY(-50%) translateX(-50%)"
    }
})