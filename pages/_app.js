import "tailwindcss/tailwind.css";
import "../styles/globals.css"
import { Context, Provider } from "../context";
import { useContext } from "react";


function MyApp({ Component, pageProps }) {
  return <Provider>
    <Component {...pageProps} />
    </Provider>
}

export default MyApp
