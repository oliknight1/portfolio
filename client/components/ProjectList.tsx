import { VStack } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { APIController } from '../controllers/APIController';
import Project from './Project';

const ProjectList : FC = () => {
	// TODO: FIX THIS ANY
	const [ projects, set_projects ] = useState( [] );
	useEffect( () => {
		const fetch_data = async () => {
			const data = await APIController.get_projects();
			set_projects( data as any );
		};
		fetch_data();
	}, [] );
	return (
		<VStack minH="100vh" spacing={[ 12, 28 ]}>
			{
				projects.map( ( project : any, i ) => (
					<Project
						key={project.id}
						id={project.id}
						title={project.title}
						description={project.description}
						image_ref={project.image}
						subheading={project.subheading}
						reverse={i % 2 !== 0}
						github_link={project.github_link}
						live_link={project.live_link}
						project_click_link={project.project_click_link}
						is_cold_boot={project.is_cold_boot}
					/>
				) )
			}
		</VStack>
	);
};
export default ProjectList;
