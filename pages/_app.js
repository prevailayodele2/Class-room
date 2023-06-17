import { SidebarProvider } from "../Context/sidebarContext";
import "../src/app/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
  );
}
