import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID,
	storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APP_FIREBASE_APPID,
	measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const refUsuaris = collection(db, "usuaris");
export const refArtistes = collection(db, "artistes");
export const refEspais = collection(db, "espais");
export const refEsdeveniments = collection(db, "esdeveniments");
export default app;

/* let authWorkerApp = firebase.initializeApp(firebase.app().options, 'auth-worker');
let authWorkerAuth = firebase.auth(authWorkerApp);
authWorkerAuth.setPersistence(firebase.auth.Auth.Persistence.NONE); // disables caching of account credentials

authWorkerAuth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
}); */
