import axios from 'axios';

export class APIController {
	public static get_projects = async () => {
		const request = await axios.get( 'http://localhost:1337/api/projects?populate=*' );
		return request.data.data;
	};

	public static get_about_text = async () => {
		const request = await axios.get( 'http://localhost:1337/api/about-me?populate=*' );
		const { attributes } = await request.data.data;
		return attributes;
	};
}
