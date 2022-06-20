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
						text="Graduate Software Engineer"
						fontWeight="medium"
						fontSize={[ '2xl', null, '6xl' ]}
						mt={-6}
						mb={6}
						opacity="0.3"
					/>

				</div>
			</motion.div>

			<Text maxW="xl" mb={8} fontSize="xl" fontWeight="light">
				I am a graduate <Text as="span" color="brand.red">developer </Text>
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
		</div>
	</Flex>
);

export default Header;
