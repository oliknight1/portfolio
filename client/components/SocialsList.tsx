import {
	Flex, VStack, IconButton, Link, IconProps,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { GithubIcon, LinkedInIcon } from '../utils/icons';
import { vertical_line } from '../styles/general';

const SocialsList: FC = () => {
	const icons = [ {
		name: 'LinkedIn',
		icon: <LinkedInIcon w={5} h={5} />,
		url: 'https://www.linkedin.com/in/oliver-knight-13804b176/',
	}, {
		name: 'Github',
		icon: <GithubIcon w={6} h={6} />,
		url: 'https://github.com/oliknight1',
	},
	];
	return (
		<Flex pos="fixed" bottom={6} left={20} flexDir="column">
			<VStack _after={{ ...vertical_line, marginTop: '15px' }}>
				{
					icons.map( ( icon ) => (
						<Link href={icon.url} isExternal>
							<IconButton variant="unstyled" _hover={{ color: 'brand.red', transform: 'translateY(-5px) scale(1.1)' }} aria-label={icon.name} icon={icon.icon} />
						</Link>

					) )
				}
			</VStack>
		</Flex>
	);
};
export default SocialsList;
