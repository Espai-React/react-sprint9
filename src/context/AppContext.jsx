import { createContext, useContext, useEffect } from "react";
import { useAutenticacio } from "../lib/hooks/useAutenticacio";
import { useUsuaris } from "../lib/hooks/useUsuaris";
import { onAuthStateChanged } from "firebase/auth";
import { auth, refUsuaris } from "../config/firebase/firebase";
import { onSnapshot } from "firebase/firestore";
import { useFormulariUsuari } from "../lib/hooks/useFormulariUsuari";

export const Context = createContext();
export const useAppContext = () => useContext(Context);

const ContextProvider = ({ children }) => {
	const {
		gestioUsuari: { usuariLoguejat, loadingUsuari },
		setGestioUsuari,
	} = useAutenticacio();

	const {
		dadesUsuari,
		dadesUsuari: {
			correuElectronic,
			administrador,
			nom,
			cognom,
			poblacio,
			codiPostal,
			telefon,
		},
		setDadesUsuari,
	} = useUsuaris();

	const { handleGetUser } = useFormulariUsuari();

	const controlUsuari =
		usuariLoguejat &&
		`Usuari loguejat: 
	authID: ${usuariLoguejat.uid}
	usuariLoguejat: ${correuElectronic}
	administrador: ${administrador}
	nom:  ${nom}
	cognom: ${cognom}
	poblacio: ${poblacio}
	codiPosatal: ${codiPostal}
	telefon: ${telefon}`;
	console.log(controlUsuari);

	useEffect(() => {/* 
		const user2 = async () => {
			return await auth.currentUser;
		};
		console.log(user2); */
		const cancellaSubscripcio = () => {
			onAuthStateChanged(auth, async (user) => {
				setGestioUsuari({
					usuariLoguejat: user,
					loadingUsuari: false,
				});
				if (user !== null) {
					const usuari = await handleGetUser(user.uid);
					const {
						correuElectronic,
						administrador,
						nom,
						cognom,
						poblacio,
						codiPostal,
						telefon,
					} = usuari;
					setDadesUsuari({
						correuElectronic,
						administrador,
						nom,
						cognom,
						poblacio,
						codiPostal,
						telefon,
					});
				}
			});
			onSnapshot(refUsuaris, (snapshot) => {
				const dadesdbUsuaris = snapshot.docs.map((doc) => ({ ...doc.data() }));
				console.log("Dades usuaris: ", dadesdbUsuaris);
			});
		};
		return () => cancellaSubscripcio();
	}, []);
	
	const value = {
		usuariLoguejatComplet: usuariLoguejat === null ? null : usuariLoguejat,
		authID: usuariLoguejat === null ? null : usuariLoguejat.uid,
		usuariLoguejat: usuariLoguejat === null ? null : usuariLoguejat.email,
		dadesUsuari,
		administrador,
		nom,
		cognom,
		poblacio,
		codiPostal,
		telefon,
	};

	return (
		<Context.Provider value={value}>
			{!loadingUsuari && children}
		</Context.Provider>
	);
};

export default ContextProvider;
