import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
	Box, Tabs, TabList, TabPanels, TabPanel, Heading, Tab, Text, HStack,
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { APIController } from '../controllers/APIController';
import { GithubIcon } from '../utils/icons';
import DarkText from './DarkText';
import LinkIconButton from './LinkIconButton';
import SubheadingDivider from './SubheadingDivider';

interface MinorProjectItemProps {
	id: string,
	title: string,
	subheading: string,
	description: string,
	github_link: string,
	live_link: string
}
const MinorProjectItem : FC<MinorProjectItemProps> = ( {
	id, title, subheading, description, github_link, live_link,
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
			<Heading fontSize="2xl" fontWeight="normal" mb={2}>{title}</Heading>
			<Heading fontSize="xl" fontWeight="light" color="brand.red" mb={1} fontFamily="monospace">{subheading}</Heading>
			<HStack mb={2}>
				{
					technologies.map( ( tech : any ) => (
						<DarkText fontSize={[ 'md', 'sm' ]}>{tech.name}</DarkText>
					) )
				}
			</HStack>
			<Text mb={4} fontSize="xl">{description}</Text>
			<HStack ml={-3}>
				{
					github_link

				&& <LinkIconButton icon={<GithubIcon w={6} h={6} />} name="GitHub repository link" url={github_link} />
				}
				{
					live_link

				&& <LinkIconButton icon={<ExternalLinkIcon w={6} h={6} />} name="Live project link" url={live_link} />
				}
			</HStack>
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
		<Box mt={[ 24, null, 36 ]}>
			<SubheadingDivider fontSize="3rem">Other Projects</SubheadingDivider>
			<Box mt={16}>
				<Tabs
					variant="line"
					size="md"
					orientation="vertical"
					colorScheme="red"
					w="100%"
					margin="auto"
					h="100%"
				>
					<TabList w="fit-content" fontFamily="monospace" alignItems="start">
						{
							projects.map( ( project : any ) => (
								<Tab key={project.id} fontSize="xl">{project.title}</Tab>
							) )
						}
					</TabList>
					<TabPanels maxW="60%">
						{
							projects.map( ( project : any ) => (
								<TabPanel minH="30vh">
									<MinorProjectItem
										id={project.id}
										title={project.title}
										subheading={project.subheading}
										description={project.description}
										key={project.id}
										github_link={project.github_link}
										live_link={project.live_link}
									/>
								</TabPanel>
							) )
						}
					</TabPanels>
				</Tabs>
			</Box>
		</Box>

	);
};
export default MinorProjects;
