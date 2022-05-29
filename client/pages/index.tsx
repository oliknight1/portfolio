import React from 'react';
import type { NextPage } from 'next';
import { Container, Fade } from '@chakra-ui/react';
import Header from '../components/Header';
import Email from '../components/Email';
import SocialsList from '../components/SocialsList';
import AboutMe from '../components/AboutMe';

const Home: NextPage = () => (
	<Container maxW="container.lg">
		<Fade
			in
			transition={{
				enter: { duration: 1.5 },
			}}
		>
			<Header />
		</Fade>
		<Fade
			in
			transition={{
				enter: { duration: 0.5, delay: 0.8 },
			}}
		>
			<SocialsList />
			<Email />
		</Fade>
		<AboutMe />

	</Container>
);

export default Home;
