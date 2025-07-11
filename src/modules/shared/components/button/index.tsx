import React from "react";
import ButtonStyle from "./style";

type propTypes = {
    children: string | React.ReactNode;
};

const Button: React.FC<propTypes> = ({ children }) => {
    
    const handleClick = (): void => {
        console.log("OK");
    };

    return (
        <>
            <ButtonStyle onClick={handleClick}>{children}</ButtonStyle>
        </>
    );
};

export default Button;
