import "styles/index.css";
import { ProvideAuth } from "utils/auth.js";
import { RequestsProvider } from "contexts/requests";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <RequestsProvider>
        <Component {...pageProps} />
      </RequestsProvider>
    </ProvideAuth>
  );
}

export default MyApp;
