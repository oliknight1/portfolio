import {
	Divider, Heading, HeadingProps, Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';

const SubheadingDivider: FC<HeadingProps> = ( { children, ...props } ) => (
	<Stack direction="row" height="75px" align="center" spacing={6} ml={-6}>
		<Heading w="fit-content" as="h2" whiteSpace="nowrap" fontSize="5xl" fontFamily="heading" fontWeight="light" {...props}>{children}</Heading>
		<Divider orientation="horizontal" borderColor="brand.red" w="400px" />
	</Stack>
);

export default SubheadingDivider;
