import React from 'react';
import {Navigate} from 'react-router-dom';
import {path} from '../common/routesNames';
import { getToken } from "/utils/LocalStorage.js";

const PublicRoute = ({children}) => {
  const isLoggedIn = getToken() !== '';

  if (isLoggedIn) {
    return <Navigate to={path.dashboard} />;
  }

  return children;
};

export default PublicRoute;
