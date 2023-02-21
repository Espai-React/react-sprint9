import { updateDoc, addDoc } from "firebase/firestore";
import { refUsuaris } from "../../config/firebase/firebase";
import { useState } from "react";

export const useUsuaris = () => {
	const [dadesUsuari, setDadesUsuari] = useState({
		authID: "id",
		correuElectronic: "correu",
		administrador: false,
		nom: "nom",
		cognom: "cognom",
		telefon: "telefon"
	});

	const crearusuari = () => {		
		addDoc(refUsuaris, dadesUsuari);
	};

	const actualitzarusuari = (dadesUsuari) =>
		updateDoc(refUsuaris, { dadesUsuari });

	return { dadesUsuari, setDadesUsuari, crearusuari, actualitzarusuari };
};

