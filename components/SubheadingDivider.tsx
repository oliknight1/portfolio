import {
	Divider, Heading, HeadingProps, Stack,
} from '@chakra-ui/react';
import React, { FC } from 'react';

const SubheadingDivider: FC<HeadingProps> = ( { children, ...props } ) => (
	<Stack direction="row" height="75px" align="center" pl={6}>
		<Divider orientation="vertical" borderColor="brand.red" />
		<Heading as="h2" fontSize="4rem" fontFamily="heading" fontWeight="normal" {...props}>{children}</Heading>
	</Stack>
);

export default SubheadingDivider;
