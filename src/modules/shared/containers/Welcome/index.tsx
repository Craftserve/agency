import { FaPhoneAlt } from "react-icons/fa"
import Box from "../../components/box"
import Button from "../../components/button"
import { IoIosInformationCircle } from "react-icons/io"
import { useTranslation } from "react-i18next"
import starsIconGroup from "../../../../assets/icons/starsIconGroup.svg"
import { Header, StarsContainer } from "./style"

const Welcome = () => {
    const {t} = useTranslation();

    return (
        <Box display="flex" gap="20px" width="100%" height="350px" position="relative" padding="20px">
            <Box width="100%" height="100%" display="flex" direction="column" justifyContent="spaceBetween">
                <Header>
                    Dziś jest Twój <br />
                    dzień, aby urosnąć <br />
                    w ideach
                </Header>
                <Box width="100%" display="flex" direction="row" gap="10px">
                    <Button variant="primary">
                        <FaPhoneAlt />
                        {t("JoinUs.title")}
                    </Button>
                    <Button variant="outlined">
                        <IoIosInformationCircle size="1.8em" />
                        <Box display="flex" direction="column">
                            <span style={{ fontSize: "14px", fontWeight: "normal" }}>{t("FindOut.title")}</span>
                            <span>{t("MoreAboutUs.title")}</span>
                        </Box>
                    </Button>
                </Box>
            </Box>
            <StarsContainer>
                <img src={starsIconGroup} alt="stars" style={{width: "100%"}} height="100%" />
            </StarsContainer>
        </Box>
    )
}

export default Welcome;