import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicPageRoutes } from "./common/routesNames";
import PublicRoute from "./routes/PublicRoutes";
import { NavBar } from "./pages";

const BaseRoutes = () => {
  const publicRoutes = Object.values(publicPageRoutes);
  return (
    <Routes>
      {publicRoutes.map(({ component: Component, name, path }) => {
        return (
          <Route
            path={path}
            key={`route-${name}`}
            element={
              <PublicRoute>
                <NavBar />
                <Component />
              </PublicRoute>
            }
          />
        );
      })}
    </Routes>
  );
};

export default BaseRoutes;
