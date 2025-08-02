import React, { type ButtonHTMLAttributes } from "react";
import ButtonStyle from "./style";
import type { ButtonVariants } from "./style";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
    children: string | React.ReactNode | React.ReactNode[];
    variant: ButtonVariants["variant"];
    height?: string;
    width?: string;
    fontSize?: string;
    padding?: string;
}

const Button = ({ children, variant, height, width, fontSize, padding }: Props) => {
    return (
        <ButtonStyle variant={variant} css={{ height, width, fontSize, padding }}>
            {children}
        </ButtonStyle>
    );
};

export default Button;
