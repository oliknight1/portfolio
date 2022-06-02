import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
	Box, Center, Divider, Flex, Heading, HStack, IconButton, Link, Text, Tooltip,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Technology } from '../types';
import { is_mobile_breakpoint } from '../utils/helpers';
import { GithubIcon } from '../utils/icons';
import DarkText from './DarkText';
import LinkIconButton from './LinkIconButton';
import Subheading from './Subheading';

interface ProjectProps {
	title: string,
	subheading: string,
	description: string,
	image_url: string,
	image_height: number,
	image_width: number,
	technologies: Technology[],
	reverse: boolean,
	github_link: string,
	live_link: string,
	project_click_link: string,
	is_cold_boot: boolean
}

const Project : FC<ProjectProps> = ( {
	title,
	subheading,
	description,
	image_url,
	image_height,
	image_width,
	technologies,
	reverse,
	github_link,
	live_link,
	project_click_link,
	is_cold_boot,
} ) => {
	const [ display_overlay, set_display_overaly ] = useState<boolean>( true );
	const cold_boot_text = 'This project is hosted on a cold start server, please allow time for the server to boot up';
	return (
		<Flex
			flexDir={[ 'column', reverse ? 'row-reverse' : 'row' ]}
			as={motion.div}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.6 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
			maxW="100%"
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
						onMouseEnter={() => set_display_overaly( false )}
						onMouseLeave={() => set_display_overaly( true )}
						w="100%"
						display="inline-block"
					>
						<Box mb={6} textAlign="left" display={[ 'inline-block', 'none' ]}>
							<Heading as="h3" fontWeight="normal" mb={1}>{title}</Heading>
							<Subheading fontSize="xl" color="brand.red">{subheading}</Subheading>
						</Box>
						<Box w={[ '100%', image_width ]} h={[ '100%', image_height ]}>
							<Box w="100%" h="100%" pos={[ 'relative', 'absolute' ]} bg="blackAlpha.300" opacity={display_overlay ? 1 : 0} transition="opacity 0.2s ease-in-out" zIndex={-1} />
							<Image src={`http://localhost:1337${image_url}`} height={image_height} width={image_width} style={{ zIndex: -2 }} objectFit="contain" />
						</Box>
					</Link>
				</Tooltip>
			</Box>
			<Flex flexDir="column">
				<Box mb="20%" textAlign={reverse ? 'left' : 'right'} display={[ 'none', 'inline-block' ]}>
					<Heading as="h3" fontWeight="normal" mb={1}>{title}</Heading>
					<Subheading fontSize="xl" color="brand.red">{subheading}</Subheading>
				</Box>
				<Box
					bg="brand.red"
					borderRadius="md"
					py={[ 4, 8 ]}
					px={6}
					w={[ 'sm', 'lg' ]}
					ml={[ 0, reverse ? 0 : '-10vw' ]}
					mr={[ 0, reverse ? '-10vw' : 0 ]}
					mb={[ 6, 0 ]}
					color="black"
					fontWeight="light"
				>
					<Text fontSize={[ 'lg', 'xl' ]}>{description}</Text>
				</Box>
				<HStack pl={2.5} spacing={4} mt={2} justify={[ 'start', reverse ? 'start' : 'end' ]} mb={[ 4, 0 ]} order={[ -1, 0 ]}>
					{
						technologies.length > 0 ? technologies.map( ( technology : Technology ) => (
							<DarkText fontSize={[ 'md', 'sm' ]} key={technology.id}>{technology.attributes.title}</DarkText>
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
					( is_mobile_breakpoint() && is_cold_boot )
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
