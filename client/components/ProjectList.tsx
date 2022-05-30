import { VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ProjectData, ProjectRequest } from '../types';
import Project from './Project';

const ProjectList : FC = () => {
	const [ projects, set_projects ] = useState<ProjectRequest[]>( [] );
	useEffect( () => {
		const fetch_data = async () => {
			const request = await axios.get( 'http://localhost:1337/api/projects?populate=*' );
			set_projects( request.data.data );
		};
		fetch_data();
	}, [] );
	return (
		<VStack minH="100vh" spacing={28}>
			{
				projects.map( ( project, i ) => {
					const data : ProjectData = project.attributes;
					const image = data.image.data[0].attributes.formats.medium;
					return (
						<Project
							key={project.id}
							title={data.title}
							description={data.description}
							image_url={image.url}
							image_height={image.height}
							image_width={image.width}
							technologies={data.technologies.data}
							subheading={data.subheading}
							reverse={i % 2 !== 0}
						/>
					);
				} )
			}
		</VStack>
	);
};
export default ProjectList;
