import { HStack, Button, Box } from '@chakra-ui/react';
import React, { FC } from 'react';

const Nav : FC = () => {
	const handle_click = ( id : string ) => {
		document.querySelector( id )?.scrollIntoView( {
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',

		} );
	};

	const links = [
		{
			id: 0,
			name: 'About',
			href: '#about',
		},
		{
			id: 1,
			name: 'Projects',
			href: '#projects',
		},
		{
			id: 2,
			name: 'Contact',
			href: '#contact',
		},
	];

	return (
		<Box pos="fixed" top={0} left={0} right={0} margin="auto" w="85%" zIndex={2} py={5} backdropFilter="blur(20px)">
			<HStack spacing={10} justify="end" align="center" h="100%">
				{
					links.map( ( link ) => (
						<Button
							variant="unstyled"
							fontWeight="normal"
							key={link.id}
							_hover={{ color: 'brand.red', transform: 'scale(1.1)' }}
							onClick={() => handle_click( link.href )}
						>
							{link.name}
						</Button>
					) )
				}
			</HStack>

		</Box>
	);
};
export default Nav;
