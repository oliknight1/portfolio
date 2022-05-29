import {
	Flex, SimpleGrid, Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Technology } from '../types';
import Subheading from './Subheading';

const AboutMe : FC = () => {
	const [ body, set_body ] = useState<string>();
	const [ technologies, set_technologies ] = useState<Technology[]>( [] );
	useEffect( () => {
		const get_data = async () => {
			const text_request = await axios.get( 'http://localhost:1337/api/about-me' );
			const technology_request = await axios.get( 'http://localhost:1337/api/technologies' );
			set_body( text_request.data.data.attributes.body );
			set_technologies( technology_request.data.data );
		};
		get_data();
	}, [] );

	console.log( body );
	return (
		<Flex
			as={motion.div}
			h="100vh"
			justifyContent="center"
			flexDir="column"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.6 }}
			transition={{ delay: 5 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
		>
			<Subheading mb={6}>About Me</Subheading>
			<Text mb={10}>{body}</Text>
			<SimpleGrid columns={3} spacingY={4}>
				{
					technologies.map( ( technology ) => (
						<Text _hover={{ color: 'brand.red' }} w="fit-content" key={technology.id} fontFamily="monospace" cursor="default">{technology.attributes.title}</Text>
					) )
				}
			</SimpleGrid>
		</Flex>
	);
};
export default AboutMe;
