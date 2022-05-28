import React from 'react';
import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Email from '../components/Email';
import SocialsList from '../components/SocialsList';

const Home: NextPage = () => (
	<Container maxW="container.xl">
		<SocialsList />
		<Email />
		<Header />
	</Container>
);

export default Home;
