import { EmailIcon } from '@chakra-ui/icons';
import {
	Button, Center, Flex, Heading, Link, Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { GithubIcon, LinkedInIcon } from '../utils/icons';

const Contact : FC = () => (
	<Center
		as={motion.div}
		h="100vh"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.7 }}
		variants={{
			visible: { opacity: 1 },
			hidden: { opacity: 0 },
		}}
		id="contact"
	>
		<Flex flexDir="column" maxW="100%">
			<Heading fontWeight="normal" mb={6} fontSize={[ '5xl', null, null, '6xl' ]}> Get in touch!</Heading>
			<Text w="2xl" maxW="100%" fontSize={[ 'lg', null, null, 'xl' ]} fontWeight="light" mb={12}>
				I'm currently searching for my next step in my career as a software developer,
				and I'm eager to het working on some great projects!
				I'm driven, passionate and always looking to learn something new.
				Get in touch if you're looking for some new energy for your team!
			</Text>
			<Flex w={[ '100%', 0, '60%' ]} justify="space-between">
				<Link href="mailto:olidknight@gmail.com" isExternal>
					<Button w="fit-content" colorScheme="red" variant="outline" leftIcon={<EmailIcon />}>Email</Button>
				</Link>
				<Link href="https://www.linkedin.com/in/oliver-knight-13804b176/" isExternal>
					<Button w="fit-content" colorScheme="red" variant="outline" leftIcon={<LinkedInIcon />}>LinkedIn</Button>
				</Link>
				<Link href="https://github.com/oliknight1" isExternal>
					<Button w="fit-content" colorScheme="red" variant="outline" leftIcon={<GithubIcon />}>GitHub</Button>
				</Link>
			</Flex>
		</Flex>
	</Center>
);
export default Contact;
