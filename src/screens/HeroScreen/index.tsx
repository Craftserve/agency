import Button from "../../modules/shared/components/button";
import Layout from "../../modules/shared/components/layout";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Navbar from "../../modules/shared/components/navbar";
import Box from "../../modules/shared/components/box";
import Card from "../../modules/shared/components/card";
import { ImageWrapper } from "./style";
import { useTranslation } from "react-i18next";
import Row from "../../modules/shared/components/row";

const HeroScreen = () => {
    const {t} = useTranslation();

    return (
        <Layout>
            <Navbar />
            <Box display="flex" direction="column" gap="30px" alignItems="center">
                <Box display="flex" gap="20px" margin="20px" width="100%">
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
                <ImageWrapper>
                    <Card 
                        variant="dark" 
                        title="Lorem ipsum dolor" 
                        height="300px" 
                        width="283px"
                        left="30px"
                        top="30px"
                    >
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
                        top="35%"
                        left="96%"
                        transform="translateY(-50%) translateX(-50%)"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                        <br />
                        <br />
                        Sketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                    </Card>
                    <Card
                        variant="dark"
                        height="350px"
                        width="450px"
                        top="60%"
                        left="56.5%"
                        transform="translateY(-50%) translateX(-50%)"
                    >
                        <Box
                            display="flex"
                            direction="column"
                            height="300px"
                            justifyContent="spaceAround"
                        >
                            <Row
                            title="Organizacja Eventów"
                            price={9000}
                            />
                            <Row
                                title="Organizacja Eventów"
                                price={9000}
                            />
                            <Row
                                title="Organizacja Eventów"
                                price={9000}
                            />
                            <Row
                                title="Organizacja Eventów"
                                price={9000}
                            />
                            <Row
                                title="Organizacja Eventów"
                                price={9000}
                            />
                        </Box>
                        
                    </Card>
                </ImageWrapper>
                <Box display="flex" direction="column" justifyContent="center" alignItems="center">
                    <span style={{fontWeight: 700, color: "rgba(12,12,12,1)"}}>Vitresoft 2025</span>
                    <span style={{fontWeight: 400, color: "rgba(12,12,12,1)"}}>Copyright © 2011 - 2025 Craftserve.</span>
                </Box>
            </Box>
        </Layout>
    );
};

export default HeroScreen;
