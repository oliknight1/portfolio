import React from 'react';
import type { NextPage } from 'next';
import { Container, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import IconList from '../components/IconList';

const Home: NextPage = () => (
	<Container maxW="container.xl">
		<IconList />
		<Header />
	</Container>
);

export default Home;
