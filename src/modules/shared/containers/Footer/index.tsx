import Box from "../../components/box";

const Footer = () => {
    return (
        <Box display="flex" direction="column" justifyContent="center" alignItems="center" padding="20px">
            <span style={{fontWeight: 700, color: "rgba(12,12,12,1)"}}>Vitresoft 2025</span>
            <span style={{fontWeight: 400, color: "rgba(12,12,12,1)"}}>Copyright © 2011 - 2025 Craftserve.</span>
        </Box>
    )
}

export default Footer;