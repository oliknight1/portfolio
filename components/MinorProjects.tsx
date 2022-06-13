import {
	Box, Tabs, TabList, TabPanels, TabPanel, Heading, Tab, Text, HStack,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { APIController } from '../controllers/APIController';
import DarkText from './DarkText';
import SubheadingDivider from './SubheadingDivider';

interface MinorProjectItemProps {
	id: string,
	title: string,
	subheading: string,
	description: string
}
const MinorProjectItem : FC<MinorProjectItemProps> = ( {
	id, title, subheading, description,
} ) => {
	const [ technologies, set_technologies ] = useState<any>( [] );

	useEffect( () => {
		const get_data = async () => {
			const data = await APIController.get_project_technologies( 'minor-projects', id );
			set_technologies( data );
		};
		get_data();
	}, [] );
	return (
		<>
			<Heading fontSize="xl" fontWeight="normal" mb={2}>{title}</Heading>
			<Heading fontSize="lg" fontWeight="light" color="brand.red" mb={1} fontFamily="monospace">{subheading}</Heading>
			<HStack mb={2}>
				{
					technologies.map( ( tech : any ) => (
						<DarkText fontSize={[ 'md', 'sm' ]}>{tech.name}</DarkText>
					) )
				}

			</HStack>
			<Text>{description}</Text>
		</>
	);
};

const MinorProjects : FC = () => {
	const [ projects, set_projects ] = useState<any>( [] );

	useEffect( () => {
		const get_data = async () => {
			const data = await APIController.get_minor_projects();
			set_projects( data );
		};
		get_data();
	}, [] );
	return (
		<Box mt={12}>
			<SubheadingDivider fontSize="3rem">Other Projects</SubheadingDivider>
			<Box mt={16}>
				<Tabs
					variant="line"
					size="md"
					orientation="vertical"
					colorScheme="red"
					w="75%"
					margin="auto"
				>
					<TabList w="fit-content">
						{
							projects.map( ( project : any ) => (
								<Tab key={project.id}>{project.title}</Tab>
							) )
						}
					</TabList>
					<TabPanels maxW="60%">
						{
							projects.map( ( project : any ) => (
								<TabPanel>
									<MinorProjectItem
										id={project.id}
										title={project.title}
										subheading={project.subheading}
										description={project.description}
										key={project.id}
									/>
								</TabPanel>
							) )
						}
						<TabPanel>
							<Heading fontSize="xl" fontWeight="normal">title</Heading>
							<p>test</p>
							<Heading fontSize="lg" fontWeight="light" color="brand.red">subheading</Heading>
							<DarkText fontSize={[ 'md', 'sm' ]}>TypeScript</DarkText>
							<Text>description</Text>
						</TabPanel>
						<TabPanel />
					</TabPanels>
				</Tabs>
			</Box>
		</Box>

	);
};
export default MinorProjects;
