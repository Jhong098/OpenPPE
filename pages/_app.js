import "styles/index.css";
import { ProvideAuth } from "utils/auth.js";
import { RequestsProvider } from "contexts/requests";
import Nav from "components/nav";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <RequestsProvider>
        <Nav />
        <Component {...pageProps} />
      </RequestsProvider>
    </ProvideAuth>
  );
}

export default MyApp;
