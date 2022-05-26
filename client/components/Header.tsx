import React from 'react';
import {
	Text, Heading, Flex, Button, Fade,
} from '@chakra-ui/react';
import Subheading from './Subheading';

const Header = () => (
	<Flex height="100vh" alignItems="center" pl={40}>
		<Fade
			in
			transition={{
				enter: { duration: 1.5 },
			}}
		>
			<Subheading mb={4}>Hi, my name is</Subheading>
			<Heading as="h1" fontWeight="medium" fontSize="6rem" mb={6}>Oli Knight</Heading>
			<Text maxW="xl" mb={8}>
				I am a graduate developer specializing in creating bespoke web experiences.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut mattis lectus.
			</Text>
			<Button variant="outline" colorScheme="red">Get in touch</Button>
		</Fade>
	</Flex>
);

export default Header;
