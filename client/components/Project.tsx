import {
	Flex, Heading, List, ListItem, Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { Technology } from '../types';

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
			<Heading as="h3">{title}</Heading>
			<Image src={`http://localhost:1337${image_url}`} height={image_height} width={image_width} />
		</div>
		<div>
			<Text>{description}</Text>
			<List>
				{
					technologies.length > 0 ? technologies.map( ( technology : Technology ) => (
						<ListItem key={technology.id}>{technology.attributes.title}</ListItem>
					) ) : null
				}
			</List>
		</div>
	</Flex>

);

export default Project;
