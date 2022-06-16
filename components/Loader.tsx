import {
	Center, Heading, VStack,
} from '@chakra-ui/react';
import React, { FC, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';

interface LoaderProps {
	set_loading: React.Dispatch<React.SetStateAction<boolean>>
}

const TextAnimation: FC = () => {
	const container: Variants = {
		hidden: {
			opacity: 0,
		},
		visible: ( i: number = 1 ) => ( {
			opacity: 1,
			transition: { staggerChildren: 0.05, delayChildren: i * 0.5 },
		} ),
	};

	const child : Variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 200,
			},
		},
		hidden: {
			opacity: 0,
			y: 20,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 200,
			},
		},
	};

	return (
		<VStack>
			<Heading
				as={motion.h1}
				style={{ display: 'flex', overflow: 'hidden' }}
				variants={container}
				fontWeight="normal"
				initial="hidden"
				animate="visible"
				exit="hidden"
				fontSize="6xl"
			>
				<motion.span variants={child}>
					O
				</motion.span>
				<motion.span variants={child}>
					K
				</motion.span>
				<motion.span variants={child}>
					.
				</motion.span>
			</Heading>
		</VStack>
	);
};
const Loader : FC<LoaderProps> = ( { set_loading } ) => {
	const variants = {
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
				<TextAnimation />

			</Center>
		</motion.div>
	);
};

export default Loader;
