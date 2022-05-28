/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import {
	Text, Heading, Flex, Button,
} from '@chakra-ui/react';
import Subheading from './Subheading';

const Header : FC = () => (
	<Flex height="100vh" alignItems="center" pl={40}>
		<div>
			<Subheading mb={4}>Hi, my name is</Subheading>
			<Heading as="h1" fontWeight="medium" fontSize="6rem" mb={6}>Oli Knight</Heading>
			<Text maxW="xl" mb={8}>
				I am a graduate <Text as="span" color="brand.red">developer </Text>
				specializing in creating bespoke web experiences.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mattis lectus.
			</Text>
			<Button fontFamily="monospace" letterSpacing="wide" variant="outline" colorScheme="red">Get in touch</Button>
		</div>
	</Flex>
);

export default Header;
