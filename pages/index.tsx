import React, { useState } from 'react';
import type { NextPage } from 'next';
import {
	Container, Fade,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/Header';
import SocialsList from '../components/SocialsList';
import AboutMe from '../components/AboutMe';
import Email from '../components/Email';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Home: NextPage = () => {
	const [ loading, set_loading ] = useState<boolean>( true );
	return (
		<AnimatePresence>
			{loading ? (
				<motion.div key="loader">
					<Loader set_loading={set_loading} />
				</motion.div>
			)
				: (
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
						<Footer />

					</Container>
				)}
		</AnimatePresence>
	);
};
export default Home;
