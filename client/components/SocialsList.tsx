import {
	Flex, VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { GithubIcon, LinkedInIcon } from '../utils/icons';
import { vertical_line } from '../styles/general';
import { LinkIcon } from '../types';
import LinkIconButton from './LinkIconButton';
import { is_mobile_breakpoint } from '../utils/helpers';

const SocialsList: FC = () => {
	const icons : LinkIcon[] = [
		{
			id: 0,
			name: 'LinkedIn',
			icon: <LinkedInIcon w={5} h={5} />,
			url: 'https://www.linkedin.com/in/oliver-knight-13804b176/',
		},
		{
			id: 1,
			name: 'Github',
			icon: <GithubIcon w={6} h={6} />,
			url: 'https://github.com/oliknight1',
		},
	];
	return (
		<Flex pos="fixed" bottom={6} left={[ null, null, '2%', '5%' ]} flexDir="column" display={is_mobile_breakpoint() ? 'none' : 'inline-block'}>
			<VStack _after={{ ...vertical_line, marginTop: '15px' }}>
				{
					icons.map( ( icon ) => (
						<LinkIconButton
							name={icon.name}
							icon={icon.icon}
							url={icon.url}
							key={icon.id}
						/>

					) )
				}
			</VStack>
		</Flex>
	);
};
export default SocialsList;
