import { useEffect } from "react";
import "../styles/globals.css";
import { axeAccessibilityReporter } from "../util/axeAccessibilityReporter";

axeAccessibilityReporter();

export default function App({ Component, pageProps }) {
  //Outra alternativa para que axe seja executado pelo lado do cliente e não do servidor.
  // useEffect(() => {
  //   axeAccessibilityReporter();
  // }, [])
  return <Component {...pageProps} />;
}
