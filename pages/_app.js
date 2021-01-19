import "tailwindcss/tailwind.css";
import "../styles/globals.css"
import { Provider } from "../context";


function MyApp({ Component, pageProps }) {
  return <Provider><Component {...pageProps} /></Provider>
}

export default MyApp
