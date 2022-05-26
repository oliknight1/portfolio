import React from 'react';
import type { NextPage } from 'next';
import { Container, Text } from '@chakra-ui/react';
import Header from '../components/Header';

const Home: NextPage = () => (
	<Container maxW="container.xl">
		<Header />
	</Container>
);

export default Home;
