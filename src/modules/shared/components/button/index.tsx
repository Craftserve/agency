import React, { type ButtonHTMLAttributes } from "react";
import ButtonStyle from "./style";
import type { ButtonVariants } from "./style";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
    children: string | React.ReactNode | React.ReactNode[];
    colorVariant: ButtonVariants["color"];
    height?: string;
    width?: string;
    fontSize?: string;
}

const Button = ({ children, colorVariant, height, width, fontSize }: Props) => {
    return (
        <ButtonStyle color={colorVariant} css={{ height, width, fontSize }}>
            {children}
        </ButtonStyle>
    );
};

export default Button;
