import Button from "../../modules/shared/components/button";
import Layout from "../../modules/shared/components/layout";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Navbar from "../../modules/shared/components/navbar";
import Box from "../../modules/shared/components/box";

const HeroScreen = () => {
    return (
        <>
            <Layout>
                <Navbar />

                <Box display="flex" gap="20px" margin="20px">
                    <Button variant="primary">
                        <FaPhoneAlt />
                        Dołącz do nas
                    </Button>
                    <Button variant="secondary">
                        <FaPhoneAlt />
                        Kontakt
                    </Button>
                    <Button variant="outlined">
                        <IoIosInformationCircle size="1.8em" />
                        <Box display="flex" direction="column">
                            <span style={{ fontSize: "14px", fontWeight: "normal" }}>dowiedz się</span>
                            <span>Więcej o nas</span>
                        </Box>
                    </Button>
                </Box>
            </Layout>
        </>
    );
};

export default HeroScreen;
