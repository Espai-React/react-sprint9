import { updateDoc, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { useState } from "react";

export const useUsuaris = () => {
	const [dadesUsuari, setDadesUsuari] = useState({
		correuElectronic: null,
		administrador: null,
		nom: null,
		cognom: null,
		poblacio: null,
		codiPostal: null,
		telefon: null,
	});

	const setDades = (clau, valor, setter) => {
		setter((prev) => ({
			...prev,
			[clau]: valor,
		}));
	};

	const crearElement = (refdb, dadesElement) => {
		addDoc(refdb, dadesElement);
	};

	const setElement = (nomdb, id, dadesElement) => {
		setDoc(doc(db, nomdb, id), dadesElement);
	};

	const actualitzarElement = (nomdb, id, dadesElement) =>
		updateDoc(doc(db, nomdb, id), dadesElement);

	const obtenirElement = (nomdb, id) => getDoc(doc(db, nomdb, id));

	return {
		dadesUsuari,
		setDadesUsuari,
		setDades,
		crearElement,
		setElement,
		actualitzarElement,
		obtenirElement,
	};
};
