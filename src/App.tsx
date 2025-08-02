import { Routes, Route } from "react-router";
import { globalStyles } from "./modules/shared/constants/global.style";
import HeroScreen from "./screens/HeroScreen";
import { lazy } from "react";

const WhyusScreen = lazy(() => import("./screens/WhyusScreen"));

function App() {
    globalStyles();

    return (
        <>
            <Routes>
                <Route path="/" element={<HeroScreen />} />
                <Route path="/whyus" element={<WhyusScreen />} />
            </Routes>
        </>
    );
}

export default App;
