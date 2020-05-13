import "../styles/index.css";
import { RequestsProvider } from "contexts/requests";
import { SidebarProvider } from "contexts/sidebar";
import RightSidebar from "components/rightSidebar";

function MyApp({ Component, pageProps }) {
  return (
    <RequestsProvider>
      <SidebarProvider>
        <RightSidebar/>
        <Component {...pageProps} />
      </SidebarProvider>
    </RequestsProvider>
  );
}

export default MyApp;
