import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { type routerType } from "../types/router.types";
import { AnimatePresence } from "framer-motion";
import pagesData from "./pageData";

const Router = () => {
  const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {pageRoutes}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
