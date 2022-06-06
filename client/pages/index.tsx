import React from 'react';
import type { NextPage } from 'next';
import { Container, Fade } from '@chakra-ui/react';
import Header from '../components/Header';
import SocialsList from '../components/SocialsList';
import AboutMe from '../components/AboutMe';
import Email from '../components/Email';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';
import Nav from '../components/Nav';

const Home: NextPage = () => (
	<Container maxW={[ 'container.sm', null, null, 'container.lg' ]}>
		<Fade
			in
			transition={{
				enter: { duration: 1.5 },
			}}
		>
			<Nav />
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
		<ProjectList />
		<Contact />

	</Container>
);

export default Home;
