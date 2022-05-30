import React from 'react';

export interface Technology {
	id: number,
	attributes: {
		title: string
	}
}

export interface Format {
	url: string,
	width: number,
	height: number
}

export interface Image {

	url: string,
	height: number,
	width: number,
	formats: {
		thumbnail: Format,
		large: Format,
		medium: Format,
		small: Format,
	}
}

export interface ProjectData {
	title: string,
	subheading: string,
	description: string,
	github_link: string,
	live_link: string,
	project_click_link: string,
	is_cold_boot: boolean
	image: {
		data : [{
			attributes: Image
		}]
	},
	technologies: {
		data : Technology[]
	}
}

export interface ProjectRequest {
	id: number,
	attributes: ProjectData
}

export interface LinkIcon {
	id?: number,
	name: string,
	icon : React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	url: string
}
