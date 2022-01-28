import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { Provider } from '../context';
import DefaultLayout from '../layout/Default';

function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <DefaultLayout></DefaultLayout>
            <Component {...pageProps} />
        </Provider>
    );
}
MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
};
export default MyApp;
