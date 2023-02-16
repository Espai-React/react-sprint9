import {
	addDoc,
	deleteDoc,
	getDocs,
	query,
	updateDoc,
} from "firebase/firestore";

export const crearCrud = (usuari) => addDoc(ref, { usuari });

export const llegirDadesCrud = () => getDocs(query(ref));

export const actualitzarCrud = (ref, usuari) => updateDoc(ref, { usuari });

export const esborrarCrud = (ref) => deleteDoc(ref);
