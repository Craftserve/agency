import { useTranslation } from "react-i18next";
import Box from "../../components/box";
import Card from "../../components/card";
import Row from "../../components/row";
import { FirstCard, ImageWrapper, SecondCard, ThirdCard } from "./style";
import { useMemo } from "react";

const Offers = () => {

    const {t} = useTranslation();

    const rowData = useMemo(() => ( [
        {
            title: t("ExampleOffer.title"),
            text: t("ExampleOffer.text"),
        },
        {
            title: t("ExampleOffer.title"),
            text: t("ExampleOffer.text"),
        },
        {
            title: t("ExampleOffer.title"),
            text: t("ExampleOffer.text"),
        },
        {
            title: t("ExampleOffer.title"),
            text: t("ExampleOffer.text"),
        },
        {
            title: t("ExampleOffer.title"),
            text: t("ExampleOffer.text"),
        },
    ]), [ t ])

    return (
        <ImageWrapper>
            <FirstCard>
                <Card 
                    variant="dark" 
                    title="Lorem ipsum dolor" 
                    height="300px" 
                    width="283px"
                >
                    PIWOSketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                    <br />
                    <br />
                    Sketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                </Card>
            </FirstCard>
            
            <SecondCard>
                <Card
                    variant="light"
                    title="Lorem ipsum dolor"
                    height="300px"
                    width="283px"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                    <br />
                    <br />
                    Sketch circle, ellipse, oval. Circular doodle frame, hand drawn pen stroke
                </Card>
            </SecondCard>
            
            <ThirdCard>
                <Card
                    variant="dark"
                    height="350px"
                    width="450px"
                >
                    <Box
                        display="flex"
                        direction="column"
                        height="300px"
                        justifyContent="spaceAround"
                    >
                        {rowData.map((x) => {
                            return(
                                <Row title={x.title} text={x.text} />
                            )
                        })}
                    </Box>
                    
                </Card>
            </ThirdCard>
            
        </ImageWrapper>
    )
}

export default Offers;