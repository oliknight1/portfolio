import React, { FC } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

const Subheading : FC<HeadingProps> = ( { children, ...props } ) => (
	<Heading as="h2" fontWeight="light" fontFamily="subheading" fontSize="4xl" {...props}>{children}</Heading>
);

export default Subheading;
