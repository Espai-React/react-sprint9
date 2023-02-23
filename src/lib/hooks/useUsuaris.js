import { updateDoc, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db, refUsuaris } from "../../config/firebase/firebase";
import { useState } from "react";

export const useUsuaris = () => {
	const [dadesUsuari, setDadesUsuari] = useState({
		correuElectronic: null,
		administrador: null,
		nom: null,
		cognom: null,
		telefon: null,
	});

	const crearusuari = (refUsuaris, dadesUsuari) => {
		addDoc(refUsuaris, dadesUsuari);
	};

	const setusuari = (nomdb, authID, dadesUsuari) => {
		setDoc(doc(db, nomdb, authID), dadesUsuari);
	};

	const actualitzarusuari = (dadesUsuari) =>
		updateDoc(refUsuaris, { dadesUsuari });
	
	const recollirusuari = (nomdb, authID) => {
		getDoc(doc(db, nomdb, authID));
	}

	return {
		dadesUsuari,
		setDadesUsuari,
		crearusuari,
		setusuari,
		actualitzarusuari,
		recollirusuari,
	};
};
