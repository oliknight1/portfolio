import React from 'react';
import { Text, Heading, Center } from '@chakra-ui/react';
import Subheading from './Subheading';

const Header = () => (
	<Center>
		<div>
			<Subheading>Hi, my name is</Subheading>
			<Heading as="h1" fontWeight="medium">Oli Knight</Heading>
			<Text>I am a graduate developer specializing in creating bespoke web experiences</Text>
		</div>
	</Center>
);

export default Header;
