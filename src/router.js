import React from "react";
import { Routes, Route } from "react-router-dom";
import { privatePageRoutes, publicPageRoutes } from "./common/routesNames";
import PublicRoute from "./routes/PublicRoutes";
import PrivateRoute from "./routes/PrivateRoute";
import { NavBar, NotFoundPage } from "./pages";
import { getToken } from "./utils/LocalStorage.js";
import { HelmetTitle } from "./components";

const BaseRoutes = () => {
  const privateRoutes = Object.values(privatePageRoutes);
  const publicRoutes = Object.values(publicPageRoutes);
  const isLoggedIn = getToken() !== "";

  return (
    <Routes>
      {isLoggedIn
        ? privateRoutes.map(({ component: Component, name, path, title }) => {
            return (
              <Route
                path={path}
                key={`route-${name}`}
                element={
                  <PrivateRoute>
                    <HelmetTitle title={`Movies | ${title}`} />
                    <NavBar isLoggedIn={isLoggedIn} />
                    <Component isLoggedIn={isLoggedIn} />
                  </PrivateRoute>
                }
              />
            );
          })
        : publicRoutes.map(({ component: Component, name, path, title }) => {
            return (
              <Route
                path={path}
                key={`route-${name}`}
                element={
                  <PublicRoute>
                    <HelmetTitle title={`Movies | ${title}`} />
                    <NavBar isLoggedIn={isLoggedIn} />
                    <Component isLoggedIn={isLoggedIn} />
                  </PublicRoute>
                }
              />
            );
          })}
      <Route path="*" element={<NotFoundPage isLoggedIn={isLoggedIn} />} />
    </Routes>
  );
};
export default BaseRoutes;
