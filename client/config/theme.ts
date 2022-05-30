import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config : ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const colors = {
	brand: {
		white: '#F4F1DE',
		red: '#E07A5F',
		purple: '#3D405B',
		green: '#81B29A',
		yellow: '#F2CC8F',
		blue: '#4ED7D8',
	},
};

const theme = extendTheme( {
	config,
	colors,
	fonts: {
		heading: '\'Inter\', sans-serif',
		subheading: '\'Source Code Pro\', monospace',
		monospace: '\'Source Code Pro\', monospace',
		body: '\'Open Sans\', sans-serif',
	},
	styles: {
		global: () => ( {
			// Optionally set global CSS styles
			body: {
				color: colors.brand.white,
				backgroundColor: colors.brand.purple,
			},
		} ),
	},
} );

export default theme;
