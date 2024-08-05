import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import BaseRoutes from "./router";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../src/redux/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/scroll/ScrollToTop";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <HelmetProvider>
        <Provider store={store}>
          <Theme>
            <ErrorBoundary>
              <ScrollToTop />
              <BaseRoutes />
            </ErrorBoundary>
          </Theme>
        </Provider>
      </HelmetProvider>
    </>
  );
}

export default App;
