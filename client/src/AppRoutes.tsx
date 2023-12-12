import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Dashboard/Home/Home";
import Loading from "./components/Loading";

const HomePage = React.lazy(() => import("./components/Home/HomePage"));

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
