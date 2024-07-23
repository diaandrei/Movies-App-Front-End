import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import BaseRoutes from "./router";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App() {
  return (
    <Theme>
      <ErrorBoundary>
        <BaseRoutes />
      </ErrorBoundary>
    </Theme>
  );
}

export default App;
