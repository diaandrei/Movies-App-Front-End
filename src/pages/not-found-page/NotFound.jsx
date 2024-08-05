import React from "react";
import { Link } from "react-router-dom";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { useLocation, matchPath } from "react-router-dom";
import { path } from "../../common/routesNames";

export const doesRouteExist = (pathname, routes) => {
  return Object.values(routes).some((route) => matchPath(route, pathname));
};

const NotFoundPage = ({ isLoggedIn }) => {
  const location = useLocation();
  const routeExists = doesRouteExist(location.pathname, path);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <FaRegFaceSadTear className="w-24 h-24 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold mb-2 capitalize">
        {routeExists
          ? isLoggedIn
            ? `To Access this path you need to log out`
            : `401 - You Cannot Access Path "${location.pathname}" without login`
          : "404 - Page Not Found"}
      </h1>
      <p className="text-lg mb-6 text-center">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
      >
        Go back to Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
