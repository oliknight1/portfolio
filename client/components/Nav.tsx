import {
	HStack, Button, Flex, Image,
} from '@chakra-ui/react';
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
		<Flex
			pos="fixed"
			top={0}
			left={0}
			right={0}
			w={[ '100%', null, null, '80%' ]}
			margin="auto"
			zIndex={2}
			py={5}
			backdropFilter="blur(20px)"
			alignItems="center"
			justify={[ 'start', 'space-between' ]}
		>
			<Image src="/logo.svg" h={9} display={[ 'none', 'inline-block' ]} pl={[ null, null, 10, 0 ]} />

			<HStack
				spacing={[ 0, null, 10 ]}
				justify={[ 'space-between', null, 'end' ]}
				align="center"
				w="100%"
				h="100%"
				pr={[ null, null, 10, 0 ]}
				mx={[ 5, 0 ]}
			>
				{
					links.map( ( link ) => (
						<Button
							variant="unstyled"
							fontWeight="normal"
							key={link.id}
							_hover={{ color: 'brand.red', transform: 'scale(1.1)' }}
							onClick={() => handle_click( link.href )}
							fontSize="xl"
						>
							{link.name}
						</Button>
					) )
				}
			</HStack>

		</Flex>
	);
};
export default Nav;
