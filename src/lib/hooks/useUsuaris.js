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

	const setDades = (clau, valor) => {
		setDadesUsuari((prev) => ({
			...prev,
			[clau]: valor,
		}));
	};

	const crearusuari = (refUsuaris, dadesUsuari) => {
		addDoc(refUsuaris, dadesUsuari);
	};

	const setusuari = (nomdb, authID, dadesUsuari) => {
		setDoc(doc(db, nomdb, authID), dadesUsuari);
	};

	const actualitzarusuari = (nomdb, authID, dadesUsuari) =>
		updateDoc(doc(db, nomdb, authID), dadesUsuari);

	const obtenirusuari = (nomdb, authID) => getDoc(doc(db, nomdb, authID));

	return {
		dadesUsuari,
		setDades,
		setDadesUsuari,
		crearusuari,
		setusuari,
		actualitzarusuari,
		obtenirusuari,
	};
};
