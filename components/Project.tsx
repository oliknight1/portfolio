import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
	Box, Divider, Flex, Heading, HStack, Link, Text, Tooltip, useBreakpoint, Image,
} from '@chakra-ui/react';
import { getDownloadURL, ref } from 'firebase/storage';
import { motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import { storage } from '../config/firebase';
import { APIController } from '../controllers/APIController';
import { Technology } from '../types';
import { GithubIcon } from '../utils/icons';
import DarkText from './DarkText';
import LinkIconButton from './LinkIconButton';
import Subheading from './Subheading';

interface ProjectProps {
	id: string
	title: string,
	subheading: string,
	description: string,
	image_ref: string,
	reverse: boolean,
	github_link: string,
	live_link: string,
	project_click_link: string,
	is_cold_boot: boolean,
}

const Project : FC<ProjectProps> = ( {
	id,
	title,
	subheading,
	description,
	image_ref,
	reverse,
	github_link,
	live_link,
	project_click_link,
	is_cold_boot,
} ) => {
	const current_breakpoint = useBreakpoint();
	const is_handheld_device : boolean = [ 'base', 'sm', 'md' ].includes( current_breakpoint as string );

	const [ image_url, set_image_url ] = useState<string>( '' );
	const [ technologies, set_technologies ] = useState<any>();

	const cold_boot_text = 'This project is hosted on a cold start server, please allow time for the server to boot up';

	useEffect( () => {
		const path_reference = ref( storage, image_ref );
		getDownloadURL( path_reference )
			.then( ( url ) => {
				set_image_url( url );
			} );
		const get_technologies = async () => {
			const data = await APIController.get_project_technologies( 'projects', id );
			set_technologies( data );
		};
		get_technologies();
	}, [] );
	return (
		<Flex
			as={motion.div}
			flexDir={[ 'column', null, null, reverse ? 'row-reverse' : 'row' ]}
			justify="center"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.6 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			w="100%"
		>
			<Box pos="relative">
				<Tooltip
					label={cold_boot_text}
					aria-label="This project is hosted on a cold start server, please allow time for the server to boot up"
					placement={reverse ? 'top-end' : 'top-start'}
					w="fit-content"
					bg="brand.white"
					pl={5}
					isDisabled={!is_cold_boot}
					py={2}
					borderRadius="md"
				>
					<Link
						href={project_click_link}
						isExternal
						minW="xl"
						w="100%"
					>
						<Box mb={6} textAlign="left" display={[ 'inline-block', null, null, 'none' ]}>
							<Heading as="h3" fontWeight="normal" mb={1}>{title}</Heading>
							<Subheading fontSize="xl" color="brand.red">{subheading}</Subheading>
						</Box>
						<Box w="100%" h="100%">
							{
								image_url
									&& (
										<Image
											src={image_url}
											zIndex={-2}
											w="fit-content"
											h="auto"
											maxH="90vh"
											borderRadius="lg"

										/>
									)
							}
						</Box>
					</Link>
				</Tooltip>
			</Box>
			<Flex flexDir="column" zIndex={1} w="30%">
				<Box mb="20%" textAlign={reverse ? 'left' : 'right'} display={[ 'none', null, null, 'inline-block' ]}>
					<Heading as="h3" fontWeight="normal" mb={1}>{title}</Heading>
					<Subheading fontSize="xl" color="brand.red">{subheading}</Subheading>
				</Box>
				<Box
					bg="brand.red"
					borderRadius="md"
					py={[ 4, null, null, 8 ]}
					px={6}
					w={[ '100%', null, null, 'lg' ]}
					ml={[ 0, null, null, reverse ? 0 : '-10vw' ]}
					mr={[ 0, null, null, reverse ? '-10vw' : 0 ]}
					mb={[ 6, null, null, 0 ]}
					color="black"
					fontWeight="light"
				>
					<Text fontSize={[ 'lg', null, null, 'xl' ]}>{description}</Text>
				</Box>
				<HStack pl={2.5} spacing={4} mt={2} justify={[ 'start', null, null, reverse ? 'start' : 'end' ]} mb={[ 4, null, null, 0 ]} order={[ -1, null, null, 0 ]}>
					{
						technologies?.length > 0 ? technologies.map( ( technology : Technology ) => (
							<DarkText fontSize={[ 'md', 'sm' ]} key={technology.id}>{technology.name}</DarkText>
						) ) : null
					}
				</HStack>
				<HStack justify={[ 'start', reverse ? 'start' : 'end' ]}>
					{
						github_link

								&& <LinkIconButton icon={<GithubIcon w={6} h={6} />} name="GitHub repository link" url={github_link} />
					}
					{
						live_link

							&& <LinkIconButton icon={<ExternalLinkIcon w={6} h={6} />} name="Live project link" url={live_link} />
					}
				</HStack>
				{
					( is_handheld_device && is_cold_boot )
					&& 						(
						<>
							<Divider mt={6} mb={4} />
							<Text fontStyle="italic">{cold_boot_text}</Text>
						</>
					)

				}
			</Flex>
		</Flex>

	);
};

export default Project;
