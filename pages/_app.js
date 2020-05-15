import "../styles/index.css";
import { RequestsProvider } from "contexts/requests";

function MyApp({ Component, pageProps }) {
  return (
    <RequestsProvider>
        <Component {...pageProps} />
    </RequestsProvider>
  );
}

export default MyApp;
