import "tailwindcss/tailwind.css";
import "../styles/globals.css"
import {  Provider } from "../context";
import DefaultLayout from "../layout/Default"

function MyApp({ Component, pageProps }) {
  return <Provider>
    <DefaultLayout></DefaultLayout>
    <Component {...pageProps} />
    </Provider>
}

export default MyApp
