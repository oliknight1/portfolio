import {
	Center,
} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import TextBounce from './TextBounce';

interface LoaderProps {
	set_loading: React.Dispatch<React.SetStateAction<boolean>>
}

const Loader : FC<LoaderProps> = ( { set_loading } ) => {
	const variants : Variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
		},
		exit: {
			opacity: 0,
		},
	};

	useEffect( () => {
		const timer = setTimeout( () => {
			set_loading( false );
		}, 2000 );
		return () => clearTimeout( timer );
	}, [] );

	return (
		<motion.div
			variants={variants}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Center
				pos="absolute"
				h="100vh"
				w="100vw"
				bg="#20212f"
			>
				<TextBounce
					text="OK."
					as={motion.h1}
					fontWeight="normal"
					fontSize="6xl"
				/>
			</Center>
		</motion.div>
	);
};

export default Loader;
