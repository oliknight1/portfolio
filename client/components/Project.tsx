import {
	Box,
	Flex, Heading, HStack, Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { Technology } from '../types';
import DarkText from './DarkText';

interface ProjectProps {
	title: string,
	description: string,
	image_url: string,
	image_height: number,
	image_width: number,
	technologies: Technology[]
}

const Project : FC<ProjectProps> = ( {
	title, description, image_url, image_height, image_width, technologies,
} ) => (
	<Flex>
		<div>
			<Image src={`http://localhost:1337${image_url}`} height={image_height} width={image_width} style={{ zIndex: -1 }} />
		</div>
		<Flex flexDir="column">
			<Heading as="h3" textAlign="right" mb="25%" fontWeight="normal">{title}</Heading>
			<Box bg="brand.red" borderRadius="md" py={8} px={6} w="lg" ml="-10vw">
				<Text fontSize="lg">{description}</Text>
			</Box>

			<HStack pl={2} spacing={4} mt={2}>
				{
					technologies.length > 0 ? technologies.map( ( technology : Technology ) => (
						<DarkText fontSize="sm" key={technology.id}>{technology.attributes.title}</DarkText>
					) ) : null
				}
			</HStack>
		</Flex>
	</Flex>

);

export default Project;
