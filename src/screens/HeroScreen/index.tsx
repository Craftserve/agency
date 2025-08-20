import Button from "../../modules/shared/components/button";
import Layout from "../../modules/shared/components/layout";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Navbar from "../../modules/shared/components/navbar";
import Box from "../../modules/shared/components/box";
import Card from "../../modules/shared/components/card";
import ImageWrapper from "./style";
import { useTranslation } from "react-i18next";

const HeroScreen = () => {
    const {t} = useTranslation();

    return (
        <>
            <Layout>
                <Navbar />
                <Box display="flex" direction="column" gap="30px">
                    <Box display="flex" gap="20px" margin="20px">
                        <Button variant="primary">
                            <FaPhoneAlt />
                            {t("JoinUs.title")}
                        </Button>
                        <Button variant="secondary">
                            <FaPhoneAlt />
                            {t("Contact.title")}
                        </Button>
                        <Button variant="outlined">
                            <IoIosInformationCircle size="1.8em" />
                            <Box display="flex" direction="column">
                                <span style={{ fontSize: "14px", fontWeight: "normal" }}>{t("FindOut.title")}</span>
                                <span>{t("MoreAboutUs.title")}</span>
                            </Box>
                        </Button>
                    </Box>
                    <ImageWrapper>
                        <Card variant="dark" title="Lorem ipsum dolor" height="300px" width="283px">
                            PIWOSketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                            <br />
                            <br />
                            Sketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                        </Card>
                        <Card
                            variant="light"
                            title="Lorem ipsum dolor"
                            height="300px"
                            width="283px"
                            margin="30px 0px 0px 400px"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                            <br />
                            <br />
                            Sketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                        </Card>
                    </ImageWrapper>
                </Box>
            </Layout>
        </>
    );
};

export default HeroScreen;
