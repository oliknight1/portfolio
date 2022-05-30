import {
	Flex, SimpleGrid, Text,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Technology } from '../types';
import Subheading from './Subheading';
import DarkText from './DarkText';

const AboutMe : FC = () => {
	const [ body, set_body ] = useState<string>( '' );
	const [ technologies, set_technologies ] = useState<Technology[]>( [] );
	useEffect( () => {
		const get_data = async () => {
			const request = await axios.get( 'http://localhost:1337/api/about-me?populate=*' );
			const { attributes } = await request.data.data;
			set_technologies( attributes.technologies.data );
			set_body( attributes.body );
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
							<DarkText>{technology.attributes.title}</DarkText>
						</Flex>
					) )
				}
			</SimpleGrid>
		</Flex>
	);
};
export default AboutMe;
