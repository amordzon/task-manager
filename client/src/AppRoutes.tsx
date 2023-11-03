import React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const HomePage = React.lazy(() => import("./components/Home/HomePage"));

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
