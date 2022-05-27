import {
	Flex, VStack, IconButton, Link,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { GithubIcon, LinkedInIcon } from '../utils/icons';
import { vertical_line } from '../styles/general';

const IconList : FC = () => (
	<Flex pos="fixed" bottom={6} left={20} flexDir="column">
		<VStack _after={{ ...vertical_line, marginTop: '15px' }}>
			<Link href="https://www.linkedin.com/in/oliver-knight-13804b176/" isExternal>
				<IconButton variant="unstyled" _hover={{ color: 'brand.red' }} aria-label="LinkedIn" icon={<LinkedInIcon w={5} h={5} />} />
			</Link>
			<Link href="https://github.com/oliknight1" isExternal>
				<IconButton variant="unstyled" _hover={{ color: 'brand.red' }} aria-label="Github" icon={<GithubIcon w={6} h={6} />} />
			</Link>
		</VStack>
	</Flex>
);
export default IconList;
