import Box from "../box";
import type { Props } from "./types";

const Row = ({title, text}: Props) => {
    return (
        <Box display="flex" direction="row" justifyContent="spaceBetween" alignItems="center" padding="15px 10px 15px 10px" backgroundColor="rgba(217, 217, 217, 0.04)" borderRadius="6px">
            <span style={{fontWeight: 300}}>{title}</span>
            <span>{text}</span>
        </Box>
    )
}

export default Row;