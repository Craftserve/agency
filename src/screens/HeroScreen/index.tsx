import Layout from "../../modules/shared/components/layout";
import Navbar from "../../modules/shared/components/navbar";
import Box from "../../modules/shared/components/box";
import Footer from "../../modules/shared/containers/Footer";
import Welcome from "../../modules/shared/containers/Welcome";
import Offers from "../../modules/shared/containers/Offers";

const HeroScreen = () => {
    return (
        <Layout>
            <Navbar />
            <Box display="flex" width="100%" direction="column" gap="30px" margin="66px 0px 0px 0px" alignItems="center">
                <Welcome />
                <Offers />
                <Footer />
            </Box>
        </Layout>
    );
};

export default HeroScreen;
