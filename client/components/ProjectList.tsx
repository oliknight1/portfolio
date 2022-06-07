import { VStack } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { APIController } from '../controllers/APIController';
import { ProjectData, ProjectRequest } from '../types';
import Project from './Project';

const ProjectList : FC = () => {
	const [ projects, set_projects ] = useState<ProjectRequest[]>( [] );
	useEffect( () => {
		const fetch_data = async () => {
			const data = await APIController.get_projects();
			set_projects( data );
		};
		fetch_data();
	}, [] );
	return (
		<VStack minH="100vh" spacing={[ 12, 28 ]}>
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
							github_link={data.github_link}
							live_link={data.live_link}
							project_click_link={data.project_click_link}
							is_cold_boot={data.is_cold_boot}
						/>
					);
				} )
			}
		</VStack>
	);
};
export default ProjectList;
