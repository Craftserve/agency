import React, { type ButtonHTMLAttributes } from "react";
import StyledButton from "./style";
import type { ButtonVariants } from "./style";

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
    children: string | React.ReactNode | React.ReactNode[];
    variant: ButtonVariants["variant"];
    fontSize?: string;
    padding?: string;
}

const Button = ({ children, variant, fontSize, padding }: Props) => {
    return (
        <StyledButton variant={variant} css={{ fontSize, padding }}>
            {children}
        </StyledButton>
    );
};

export default Button;
