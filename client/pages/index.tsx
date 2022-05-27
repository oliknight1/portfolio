import React from 'react';
import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Header from '../components/Header';
import Email from '../components/Email';
import IconList from '../components/IconList';

const Home: NextPage = () => (
	<Container maxW="container.xl">
		<IconList />
		<Email />
		<Header />
	</Container>
);

export default Home;
