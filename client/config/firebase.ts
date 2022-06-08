import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebase_config = {
	apiKey: 'AIzaSyAKG3P7eIyEXBalH4UkxeSpnJgGuev8YT8',
	authDomain: 'portfolio-4b41c.firebaseapp.com',
	projectId: 'portfolio-4b41c',
	storageBucket: 'portfolio-4b41c.appspot.com',
	messagingSenderId: '415461219814',
	appId: '1:415461219814:web:959a8aec2c1bf032188a27',
};

const app = initializeApp( firebase_config );
export const db = getFirestore( app );
export const storage = getStorage();
