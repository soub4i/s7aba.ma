import "tailwindcss/tailwind.css";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import "../styles/globals.css"
import { Provider } from "../context";
import DefaultLayout from "../Layout/Default";


function MyApp({ Component, pageProps }) {
  return <Provider>
    <DefaultLayout>
    <Component {...pageProps} />
    </DefaultLayout>
    </Provider>
}

export default MyApp
