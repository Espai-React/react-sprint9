import { createContext, useContext, useEffect } from "react";
import { useAutenticacio } from "../lib/hooks/useAutenticacio";
import { useUsuaris } from "../lib/hooks/useUsuaris";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, refUsuaris } from "../config/firebase/firebase";
import { doc, getDoc, onSnapshot } from "firebase/firestore";

export const Context = createContext();
export const useAppContext = () => useContext(Context);

const ContextProvider = ({ children }) => {
	const {
		gestioUsuari: { usuariLoguejat, loadingUsuari, administrador },
		setGestioUsuari,
	} = useAutenticacio();

	const {
		dadesUsuari: { nom, cognom, telefon },
		setDadesUsuari,
	} = useUsuaris();

	console.log(
		"Usuari loguejat: \n",
		usuariLoguejat === null
			? null
			: `id: ${usuariLoguejat.uid} \n${usuariLoguejat.email}  \n administrador: ${administrador} \n${nom} \n${cognom} \n${telefon}`
	);

	useEffect(() => {
		const cancellaSubscripcio = () => {
			onAuthStateChanged(auth, async (user) => {
				const usuari = (await getDoc(doc(db, "usuaris", user.uid))).data();
				const { correuElectronic, administrador, nom, cognom, telefon } =
					usuari;
				setDadesUsuari({
					correuElectronic,
					administrador,
					nom,
					cognom,
					telefon,
				});
				setGestioUsuari({
					usuariLoguejat: user,
					loadingUsuari: false,
					administrador,
				});
			});
			onSnapshot(refUsuaris, (snapshot) => {
				const dadesdbUsuaris = snapshot.docs.map((doc) => ({ ...doc.data() }));
				console.log("Dades usuaris: ", dadesdbUsuaris);
			});
		};
		return () => cancellaSubscripcio();
	}, [usuariLoguejat]);

	const value = {
		authID: usuariLoguejat === null ? null : usuariLoguejat.uid,
		usuariLoguejat: usuariLoguejat === null ? null : usuariLoguejat.email,
		administrador: usuariLoguejat === null ? null : administrador,
	};

	return (
		<Context.Provider value={value}>
			{!loadingUsuari && children}
		</Context.Provider>
	);
};

export default ContextProvider;
