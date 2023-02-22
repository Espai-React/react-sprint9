import { updateDoc, addDoc, setDoc, doc } from "firebase/firestore";
import { refUsuaris } from "../../config/firebase/firebase";
import { useState } from "react";

export const useUsuaris = () => {
	const [dadesUsuari, setDadesUsuari] = useState({
		authID: null,
		correuElectronic: null,
		administrador: false,
		nom: "nom",
		cognom: "cognom",
		telefon: "telefon",
	});

	const crearusuari = (refUsuaris, dadesUsuari) => {
		addDoc(refUsuaris, dadesUsuari);
	};

	const setusuari = (nomdb, authID, dadesUsuari) => {
		setDoc(doc(db, nomdb, authID), { dadesUsuari });
	};

	const actualitzarusuari = (dadesUsuari) =>
		updateDoc(refUsuaris, { dadesUsuari });

	return {
		dadesUsuari,
		setDadesUsuari,
		crearusuari,
		setusuari,
		actualitzarusuari,
	};
};
