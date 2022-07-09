import { AnimateSharedLayout } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Calendar from "views/Calendar";
import Camera from "views/Camera";
import Home from "views/Home";
import UiKit from "views/UiKit";
import Weather from "views/Weather";

const AppRoutes = () => {
  return (
    <AnimateSharedLayout>
      <Routes>
        <Route path="/uikit" element={<UiKit />} />
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </AnimateSharedLayout>
  );
};

export default AppRoutes;
