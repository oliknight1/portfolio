import {
	collection, DocumentData, getDocs,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export class APIController {
	public static get_projects = async () => this.get_document( 'projects' );

	public static get_minor_projects = async () => this.get_document( 'minor-projects' );

	public static get_technologies = async () : Promise<DocumentData[]> => this.get_document( 'technologies' );

	private static get_document = async ( name : string ) => {
		const query_snapshot = await getDocs( collection( db, name ) );
		return query_snapshot.docs.map( ( doc ) => ( {
			id: doc.id,
			...doc.data(),
		} ) );
	};

	public static get_project_technologies = async ( collection_name: string, id: string ) => {
		const query_snapshot = await getDocs( collection( db, `${collection_name}/${id}/technologies` ) );
		const fetched_technologies = query_snapshot.docs.map( ( doc ) => ( {
			id: doc.id,
			...doc.data(),
		} ) );
		return fetched_technologies;
	};
}
