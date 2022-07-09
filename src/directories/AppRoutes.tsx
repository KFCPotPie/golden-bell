import { Routes, Route } from "react-router-dom";
import Home from "views/Home";
import UiKit from "views/UiKit";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/uikit" element={<UiKit />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
