import { updateDoc, addDoc } from "firebase/firestore";
import { refUsuaris } from "../../config/firebase/firebase";
import { useState } from "react";

export const useUsuaris = (usuariLoguejat, uid, administrador) => {
	const [dadesUsuari, setDadesUsuari] = useState({
		id: uid,
		correuElectronic: usuariLoguejat,
		administrador: administrador,
		nom: "nom",
		cognom: "cognom",
		telefon: "telefon",
	});

	const crearusuari = (dadesUsuari) => {
		addDoc(refUsuaris, dadesUsuari);
	};

	const actualitzarusuari = (dadesUsuari) =>
		updateDoc(refUsuaris, { dadesUsuari });

	return { dadesUsuari, setDadesUsuari, crearusuari, actualitzarusuari };
};
