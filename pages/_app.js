import "styles/index.css";
import { ProvideAuth } from "utils/auth.js";
import { RequestsProvider } from "contexts/requests";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <RequestsProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </RequestsProvider>
    </ProvideAuth>
  );
}

export default MyApp;
