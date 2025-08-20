import Box from "../../components/box";
import Card from "../../components/card";
import Row from "../../components/row";
import { ImageWrapper } from "./style";

const Offers = () => {
    return (
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
    )
}

export default Offers;