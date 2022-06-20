/* eslint-disable react/jsx-one-expression-per-line */
import React, { FC } from 'react';
import {
	Text, Flex, Button,
} from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import TextBounce from './TextBounce';

const container : Variants = {
	visible: {
		transition: {
			delayChildren: 1,
			staggerChildren: 0.025,
		},
	},
};
const text : Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 2 },
	},
};
const Header : FC = () => (
	<Flex height="100vh" alignItems="center" overflowX="hidden">
		<div>
			<TextBounce
				as={motion.h2}
				text="Hi, my name is"
				fontWeight="light"
				fontSize="3xl"
				ml={2}
				mb={2}
				fontFamily="subheading"
			/>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={container}
			>
				<div>
					<AnimatedTitle
						text="Oli Knight"
						fontWeight="medium"
						fontSize={[ '6xl', null, '8xl' ]}
					/>
					<AnimatedTitle
						text="Graduate Developer"
						fontWeight="medium"
						fontSize={[ '4xl', null, '5xl', '8xl' ]}
						mt={-6}
						mb={2}
						opacity="0.3"
					/>

				</div>
				<motion.div variants={text} initial="hidden" animate="visible">
					<Text maxW={[ '100%', null, '3xl' ]} mb={8} fontSize={[ 'lg', null, '2xl' ]} fontWeight="light">
						I&#39;m a graduate <Text as="span" color="brand.red">developer </Text>
						specializing in creating bespoke web experiences. I work on
						both the front and back end with a variety of languages.
					</Text>
					<Button
						onClick={() => {
							document.querySelector( '#contact' )?.scrollIntoView( {
								behavior: 'smooth',
								block: 'start',
								inline: 'nearest',

							} );
						}}
						variant="outline"
						colorScheme="red"
					>
						Get in touch
					</Button>
				</motion.div>
			</motion.div>

		</div>
	</Flex>
);

export default Header;
