import React from "react";
import { Route } from "react-router-dom";
import { path } from "./common/routesNames";
import { allTexts } from "./common/constants";

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };
  static getDerivedStateFromError(error) {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <p>{allTexts.SomethingError}</p>
          <Route to={path.home} />
        </>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
