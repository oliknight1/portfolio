import React, { FC } from 'react';
import { Box, Link } from '@chakra-ui/react';
import { vertical_line } from '../styles/general';

const Email : FC = () => {
	const after_style = {
		...vertical_line,
		transform: 'rotate(90deg)',
		bottom: '-39px',
		position: 'absolute',
		right: '-30%',
		pointerEvents: 'none',

	};
	return (
		<Box pos="fixed" transform="rotate(90deg)" bottom="250px" right={[ null, null, '-12%', 0 ]} w="fit-content" display={[ 'none', 'inline-block' ]}>
			<Link
				href="mailto:olidknight@gmail.com"
				_hover={{ textDecoration: 'none', color: 'brand.red' }}
				_after={after_style}
				fontFamily="monospace"
				letterSpacing="wide"
				fontSize="xl"
			>
				olidknight@gmail.com
			</Link>
		</Box>
	);
};

export default Email;
