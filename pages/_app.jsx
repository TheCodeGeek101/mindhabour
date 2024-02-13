import React from "react";
import '../app/globals.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { SnackbarProvider } from 'notistack';
import createCache from '@emotion/cache';

const clientSideEmotionCache = createCache({ key: 'css' });

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache, }) {

	return (
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <PayPalScriptProvider deferLoading={true}>
		      <Component {...pageProps} />
        </PayPalScriptProvider>
      </SnackbarProvider>
	); 
} 