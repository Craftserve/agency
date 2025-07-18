import React from "react";
import ButtonStyle from "./style";
import type { ButtonVariants } from "./style";

interface Props {
    children: string | React.ReactNode | React.ReactNode[];
    colorVariant: ButtonVariants["color"];
    height?: string;
    width?: string;
    fontSize?: string;
}

const Button = ({ children, colorVariant, height, width, fontSize }: Props) => {
    const handleClick = (): void => {
        console.log("OK");
    };

    return (
        <ButtonStyle color={colorVariant} css={{ height, width, fontSize }} onClick={handleClick}>
            {children}
        </ButtonStyle>
    );
};

export default Button;
