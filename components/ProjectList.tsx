import { VStack } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { APIController } from '../controllers/APIController';
import MinorProjects from './MinorProjects';
import Project from './Project';
import SubheadingDivider from './SubheadingDivider';

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
		<>
			<SubheadingDivider>Projects</SubheadingDivider>
			<VStack spacing={[ 12, 64 ]} mt={20}>
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
							project_click_link={project.click_link}
							is_cold_boot={project.is_cold_boot}
						/>
					) )
				}
			</VStack>
			<MinorProjects />
		</>
	);
};
export default ProjectList;
