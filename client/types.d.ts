export interface Technology {
	id: number,
	attributes: {
		title: string
	}
}

export interface Image {

	url: string,
	height: number,
	width: number
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
