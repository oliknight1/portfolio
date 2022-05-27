import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
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
		<Global styles={global_styles} />
		<Component {...pageProps} />
	</ChakraProvider>
);

export default MyApp;
