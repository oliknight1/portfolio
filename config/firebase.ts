import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebase_config = {
	apiKey: ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' )
		? process.env.NEXT_PUBLIC_TEST_API_KEY
		: process.env.NEXT_PUBLIC_API_KEY,
	authDomain: ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' )
		? process.env.NEXT_PUBLIC_TEST_AUTH_DOMAIN
		: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
	projectId: ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' )
		? process.env.NEXT_PUBLIC_TEST_PROJECT_ID
		: process.env.NEXT_PUBLIC_PROJECT_ID,
	storageBucket: ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' )
		? process.env.NEXT_PUBLIC_STORAGE_BUCKET
		: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' )
		? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID
		: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
	appId: ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development' )
		? process.env.NEXT_PUBLIC_TEST_APP_ID
		: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp( firebase_config );
export const db = getFirestore( app );
export const storage = getStorage();
