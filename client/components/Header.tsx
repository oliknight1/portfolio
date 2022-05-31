/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import {
	Text, Heading, Flex, Button,
} from '@chakra-ui/react';
import Subheading from './Subheading';

const Header : FC = () => (
	<Flex height="100vh" alignItems="center">
		<div>
			<Subheading mb={4}>Hi, my name is</Subheading>
			<Heading as="h1" fontWeight="medium" fontSize="6rem">Oli Knight</Heading>
			<Heading as="h2" fontWeight="medium" fontSize="4rem" mb={6} opacity="0.3">Graduate Software Developer</Heading>
			<Text maxW="xl" mb={8}>
				I am a graduate <Text as="span" color="brand.red">developer </Text>
				specializing in creating bespoke web experiences.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mattis lectus.
			</Text>
			<Button variant="outline" colorScheme="red">Get in touch</Button>
		</div>
	</Flex>
);

export default Header;
