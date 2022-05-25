import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

const MyApp = ( { Component, pageProps } : AppProps ) => {
	const colors = {
	};

	const theme = extendTheme( { colors } );
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
