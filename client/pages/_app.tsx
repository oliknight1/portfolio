import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../config/theme';
import 'focus-visible/dist/focus-visible';

const global_styles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

const MyApp = ( { Component, pageProps } : AppProps ) => (
	<ChakraProvider theme={theme}>
		<Head>
			<title>Oli Knight</title>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
			/>
		</Head>
		<Global styles={global_styles} />
		<Component {...pageProps} />
	</ChakraProvider>
);

export default MyApp;
