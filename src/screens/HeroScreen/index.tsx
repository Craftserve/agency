import Button from "../../modules/shared/components/button";
import Layout from "../../modules/shared/components/layout";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import Navbar from "../../modules/shared/components/navbar";
import Box from "../../modules/shared/components/box";
import Card from "../../modules/shared/components/card";

const HeroScreen = () => {
    return (
        <>
            <Layout>
                <Navbar />
                <Box display="flex" direction="column" gap="30px">
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
                    <Box display="flex" direction="row" gap="30px">
                        <Card variant="gray" title="Lorem ipsum dolor" height="auto" width="283px">
                            Sketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                            <br />
                            <br />
                            Sketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                        </Card>
                        <Card variant="light" title="Lorem ipsum dolor" height="auto" width="283px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                            <br />
                            <br />
                            Sketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                        </Card>
                    </Box>
                </Box>
            </Layout>
        </>
    );
};

export default HeroScreen;
