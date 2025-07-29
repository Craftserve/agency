import Button from "../../modules/shared/components/button";
import Layout from "../../modules/shared/components/layout";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Navbar from "../../modules/shared/components/navbar";

const HeroScreen = () => {
    return (
        <>
            <Layout>
                <Navbar />
                <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
                    <Button colorVariant="primary">
                        <FaPhoneAlt />
                        Dołącz do nas
                    </Button>
                    <Button colorVariant="secondary" height="62px" width="121px">
                        <FaPhoneAlt />
                        Kontakt
                    </Button>
                    <Button colorVariant="outlined" height="54px" width="187px">
                        <IoIosInformationCircle size="1.8em" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ fontSize: "14px", fontWeight: "normal" }}>dowiedz się</span>
                            <span>Więcej o nas</span>
                        </div>
                    </Button>
                </div>
            </Layout>
        </>
    );
};

export default HeroScreen;
