import Layout from "../../modules/shared/components/layout";
import Navbar from "../../modules/shared/components/navbar";
import Box from "../../modules/shared/components/box";
import { useTranslation } from "react-i18next";

import Footer from "../../modules/shared/containers/Footer";
import Welcome from "../../modules/shared/containers/Welcome";
import Offers from "../../modules/shared/containers/Offers";

const HeroScreen = () => {
    return (
        <Layout>
            <Navbar />
            <Box display="flex" direction="column" gap="30px" margin="66px 0px 0px 0px" alignItems="center">
                <Welcome />
                <Offers />
                <Footer />
            </Box>
        </Layout>
    );
};

export default HeroScreen;
