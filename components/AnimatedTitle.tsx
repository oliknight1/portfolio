import { Heading, HeadingProps } from '@chakra-ui/react';
import { Variants, motion } from 'framer-motion';
import React, { FC } from 'react';

interface AnimatedTitleProps extends HeadingProps {
	text: string,

}
const AnimatedTitle : FC<AnimatedTitleProps> = ( { text, ...props } ) => {
	const item : Variants = {
		hidden: {
			y: '200%',
			transition: { ease: [ 0.455, 0.03, 0.515, 0.955 ], duration: 0.85 },
		},
		visible: {
			y: 0,
			transition: { delayChildren: 2, ease: [ 0.455, 0.03, 0.515, 0.955 ], duration: 0.75 },
		},
	};

	const split_words : string[] = text.split( ' ' );

	const letters : string[] = [];

	split_words.forEach( ( word, i ) => {
		const split_letters = word.split( '' );
		letters.push( ...split_letters );
		if ( i < split_words.length - 1 ) {
			letters.push( '\u00A0' );
		}
	} );

	return (
		<Heading as="h1" {...props}>
			{
				letters.map( ( letter : string ) => (
					<span
						style={{
							overflow: 'hidden',
							display: 'inline-block',
						}}
					>
						<motion.span
							style={{ display: 'inline-block' }}
							variants={item}
						>
							{letter}
						</motion.span>
					</span>
				) )
			}
		</Heading>
	);
};

export default AnimatedTitle;
