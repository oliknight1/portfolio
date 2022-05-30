import {
	Box,
	Flex, Heading, HStack, Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { Technology } from '../types';
import DarkText from './DarkText';
import Subheading from './Subheading';

interface ProjectProps {
	title: string,
	subheading: string,
	description: string,
	image_url: string,
	image_height: number,
	image_width: number,
	technologies: Technology[],
	reverse: boolean
}

const Project : FC<ProjectProps> = ( {
	title, subheading, description, image_url, image_height, image_width, technologies, reverse,
} ) => (
	<Flex flexDir={reverse ? 'row-reverse' : 'row'}>
		<div>
			<Image src={`http://localhost:1337${image_url}`} height={image_height} width={image_width} style={{ zIndex: -1 }} />
		</div>
		<Flex flexDir="column">
			<Box mb="20%" textAlign={reverse ? 'left' : 'right'}>
				<Heading as="h3" fontWeight="normal" mb={1}>{title}</Heading>
				<Subheading fontSize="xl" color="brand.red">{subheading}</Subheading>
			</Box>
			<Box bg="brand.red" borderRadius="md" py={8} px={6} w="lg" ml={reverse ? 0 : '-10vw'} mr={reverse ? '-10vw' : 0}>
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
