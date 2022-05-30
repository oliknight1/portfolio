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
	description: string,
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
