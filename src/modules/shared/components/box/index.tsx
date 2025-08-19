import StyledBox from "./style";
import type { BoxVariants } from "./style";

interface Props {
    children: string | React.ReactNode | React.ReactNode[];
    height?: string;
    width?: string;
    display?: BoxVariants["display"];
    direction?: BoxVariants["direction"];
    justifyContent?: BoxVariants["justifyContent"];
    alignItems?: BoxVariants["alignItems"];
    padding?: string;
    margin?: string;
    gap?: string;
    backgroundImage?: string;
}

const Box = ({
    children,
    height,
    width,
    display,
    direction,
    justifyContent,
    alignItems,
    padding,
    margin,
    gap,
    backgroundImage,
}: Props) => {
    return (
        <StyledBox
            display={display}
            direction={direction}
            justifyContent={justifyContent}
            alignItems={alignItems}
            css={{ height, width, padding, margin, gap, backgroundImage }}
        >
            {children}
        </StyledBox>
    );
};

export default Box;
