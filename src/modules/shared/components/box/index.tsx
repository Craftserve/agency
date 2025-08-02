import BoxStyle from "./style";
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
}: Props) => {
    return (
        <BoxStyle
            display={display}
            direction={direction}
            justifyContent={justifyContent}
            alignItems={alignItems}
            css={{ height, width, padding, margin, gap }}
        >
            {children}
        </BoxStyle>
    );
};

export default Box;
