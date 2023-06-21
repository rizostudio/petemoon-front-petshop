import "../styles/globals.css";
import AuthProvider from "@/store/AuthCtx/AuthProvider";
export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
