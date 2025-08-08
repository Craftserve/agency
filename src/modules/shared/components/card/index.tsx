import Box from "../box";
import { StyledCard, StyledCircleIcon, StyledTitle } from "./style";
import type { CardVariants } from "./style";

interface Props {
    children: string | React.ReactNode | React.ReactNode[];
    variant: CardVariants["variant"];
    title: string;
    height: string;
    width: string;
    backgroundColor?: string;
    color?: string;
}

const Card = ({ children, variant, title, height, width, backgroundColor, color }: Props) => {
    return (
        <StyledCard variant={variant} css={{ height, width, backgroundColor, color }}>
            <Box
                display="flex"
                direction="row"
                justifyContent="right"
                alignItems="center"
                height="30px"
                width="100%"
                padding="13px 0px 10px 0px"
            >
                <Box
                    display="flex"
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="6px"
                    height="100%"
                    width="auto"
                >
                    <StyledCircleIcon color="success" />
                    <StyledCircleIcon color="warning" />
                    <StyledCircleIcon color="danger" />
                </Box>
            </Box>

            <Box display="flex" width="100%" margin="0px 0px 15px 0px">
                <StyledTitle>{title}</StyledTitle>
            </Box>
            <Box>{children}</Box>
        </StyledCard>
    );
};

export default Card;
