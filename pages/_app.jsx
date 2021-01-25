import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { Context, Provider } from '../context';
import { useContext } from 'react';
import DefaultLayout from '../layout/Default';

function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <DefaultLayout></DefaultLayout>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
