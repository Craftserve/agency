import { Routes, Route } from "react-router";
import { globalStyles } from "./modules/shared/constants/global.style";
import HeroScreen from "./screens/HeroScreen";

function App() {
    globalStyles();

    return (
        <>
            <Routes>
                <Route path="/" element={<HeroScreen />} />
            </Routes>
        </>
    );
}

export default App;
