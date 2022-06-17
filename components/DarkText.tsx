import React, { FC } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

const DarkText : FC<TextProps> = ( { children, ...props } ) => (
	<Text
		_hover={{ color: 'brand.red', opacity: 1 }}
		w="fit-content"
		fontFamily="monospace"
		cursor="default"
		fontSize="lg"
		opacity={0.6}
		whiteSpace="nowrap"
		{...props}
	>
		{children}

	</Text>
);

export default DarkText;
