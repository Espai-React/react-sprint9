import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {collection, getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyCyywpbKu-xym338kH1C8hv3r-vQtCxb7E",
	authDomain: "envivo-f665f.firebaseapp.com",
	projectId: "envivo-f665f",
	storageBucket: "envivo-f665f.appspot.com",
	messagingSenderId: "203490706625",
	appId: "1:203490706625:web:6743701ea60e2f599d0040",
	measurementId: "G-0GWGJS0LNL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
//export const refPersones = collection(db, "persones");
export default app;
