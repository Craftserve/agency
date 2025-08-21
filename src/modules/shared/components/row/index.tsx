import Box from "../box";
import { StyledSpan } from "./style";
import type { Props } from "./types";

const Row = ({title, text}: Props) => {
    return (
        <Box display="flex" direction="row" justifyContent="spaceBetween" alignItems="center" padding="15px 10px 15px 10px" backgroundColor="rgba(217, 217, 217, 0.04)" borderRadius="6px">
            <StyledSpan style={{fontWeight: 300, width: "60%"}}>{title}</StyledSpan>
            <StyledSpan style={{width: "40%", textAlign: "end"}}>{text}</StyledSpan>
        </Box>
    )
}

export default Row;