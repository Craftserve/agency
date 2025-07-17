import React from "react";
import ButtonStyle from "./style";

interface propTypes {
    children: string | React.ReactNode;
}

const Button = ({ children }: propTypes) => {
    const handleClick = (): void => {
        console.log("OK");
    };

    return <ButtonStyle onClick={handleClick}>{children}</ButtonStyle>;
};

export default Button;
