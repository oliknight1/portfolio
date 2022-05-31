import { EmailIcon } from '@chakra-ui/icons';
import {
	Button, Center, Flex, Heading, Link, Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';

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
	>
		<Flex flexDir="column">
			<Heading fontWeight="normal" mb={6}>Get in touch!</Heading>
			<Text w="2xl" fontSize="xl" fontWeight="light" mb={12}>
				I'm currently searching for my next step in my career as a software developer,
				and I'm eager to het working on some great projects!
				I'm driven, passionate and always looking to learn something new.
				Send me an email if you're looking for some new energy for your team!
			</Text>
			<Link href="mailto:olidknight@gmail.com">
				<Button w="fit-content" colorScheme="red" variant="outline" leftIcon={<EmailIcon />}>Get in touch!</Button>
			</Link>
		</Flex>
	</Center>
);
export default Contact;
