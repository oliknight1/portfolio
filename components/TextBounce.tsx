import { Heading, HeadingProps, VStack } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import React, { FC } from 'react';
import { create_letter_array } from '../utils/helpers';

interface TextBounceProps extends HeadingProps {
	text: string
}

const TextBounce: FC<TextBounceProps> = ( { text, ...props } ) => {
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

	const letters : string[] = create_letter_array( text );

	return (
		<VStack alignItems="start">
			<Heading
				style={{ display: 'flex', overflow: 'hidden' }}
				variants={container}
				initial="hidden"
				animate="visible"
				exit="hidden"
				{...props}
			>
				{
					letters.map( ( letter, i ) => (
						// eslint-disable-next-line react/no-array-index-key
						<motion.p variants={child} key={`${letter} - ${i}`}>
							{letter}
						</motion.p>
					) )
				}
			</Heading>
		</VStack>
	);
};

export default TextBounce;
