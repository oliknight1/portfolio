import {
	Flex, SimpleGrid, Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Technology } from '../types';
import Subheading from './Subheading';

const AboutMe : FC = () => {
	const [ body, set_body ] = useState<string>( '' );
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

	return (
		<Flex
			as={motion.div}
			h="100vh"
			justifyContent="center"
			flexDir="column"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.6 }}
			variants={{
				visible: { opacity: 1, type: 'spring' },
				hidden: { opacity: 0 },
			}}
		>
			<Subheading mb={6} fontSize="4rem">About Me</Subheading>
			<div dangerouslySetInnerHTML={{ __html: body }} />
			<SimpleGrid columns={3} spacingY={4}>
				{
					technologies.map( ( technology ) => (
						<Flex alignItems="center" key={technology.id}>
							<ChevronRightIcon color="brand.red" w={4} h={4} mr={3} />
							<Text _hover={{ color: 'brand.red' }} w="fit-content" fontFamily="monospace" cursor="default" fontSize="lg">{technology.attributes.title}</Text>
						</Flex>
					) )
				}
			</SimpleGrid>
		</Flex>
	);
};
export default AboutMe;
