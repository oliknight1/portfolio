import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';

const AboutMe : FC = () => {
	const [ body, set_body ] = useState<string>( '' );
	useEffect( () => {
		const get_data = async () => {
			const request = await axios.get( 'http://localhost:1337/api/about-me' );
			await set_body( request.data.data.attributes.body );
		};
		get_data();
	}, [] );

	return (
		<p>{body}</p>
	);
};
export default AboutMe;
