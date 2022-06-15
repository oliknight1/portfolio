import {
	Flex, SimpleGrid, Text,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Technology } from '../types';
import DarkText from './DarkText';
import { APIController } from '../controllers/APIController';
import SubheadingDivider from './SubheadingDivider';

const AboutMe : FC = () => {
	const [ technologies, set_technologies ] = useState<Technology[]>( [] );
	useEffect( () => {
		const get_data = async () => {
			const data = await APIController.get_technologies();
			set_technologies( data as Technology[] );
		};
		get_data();
	}, [] );

	return (
		<Flex
			as={motion.div}
			minH="100vh"
			justifyContent="center"
			flexDir="column"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.6 }}
			variants={{
				visible: { opacity: 1, type: 'spring' },
				hidden: { opacity: 0 },
			}}
			mb={[ 20, 0 ]}
			id="about"
		>
			<SubheadingDivider>About Me</SubheadingDivider>
			<Text fontWeight="light" fontSize="xl" mb={12} mt={8}>
				Hey, my name is Oli Knight and I love creating interactive, data-driven projects
				that can be used by a wide range of people. My passion for development started at
				college where I created my first basic site using HTML and CSS and
				I have been hooked ever since!

				<br />
				<br />

				I have recently finished my Computing for Web and Mobile degree at the
				University of Brighton where I learnt a variety of development and soft skills.
				I also have professional experience due to completing an industrial placement.

				<br />
				<br />

				I am passionate about picking up new skills and
				I am always looking to pick up new technologies.
				These are the currently technologies I am comfortable with:

			</Text>
			<SimpleGrid columns={[ 2, 3 ]} spacingY={[ 6, 4 ]}>
				{
					technologies.map( ( technology ) => (
						<Flex alignItems="center" key={technology.id}>
							<ChevronRightIcon color="brand.red" w={4} h={4} mr={3} />
							<DarkText>{technology.name}</DarkText>
						</Flex>
					) )
				}
			</SimpleGrid>
		</Flex>
	);
};
export default AboutMe;
