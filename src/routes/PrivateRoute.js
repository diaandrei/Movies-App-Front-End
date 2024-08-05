import { getToken } from "../utils/LocalStorage";


const PrivateRoute = ({ children }) => {
  const isLoggedIn = getToken() !== "";

  return children;
};

export default PrivateRoute;
