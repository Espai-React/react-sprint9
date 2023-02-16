import { useState } from "react";
import { collection } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { useAppContext } from "../../context/AppContext";

export const useBasedeDades = () => {
	const refUsuaris = collection(db, "usuaris");
	const refArtistes = collection(db, "artistes");
	const refSales = collection(db, "sales");
	const refEsdeveniments = collection(db, "esdeveniments");

	const { usuariLoguejat } = useAppContext();

	const [usuaris, setUsuaris] = useState({
		id: usuariLoguejat.uid,
		correuElectrònic: usuariLoguejat.email,
		nom: "",
		cognom: "",
		telèfon: "",
	});

	return {};
};
