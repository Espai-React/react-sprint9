import { createContext, useContext, useEffect } from "react";
import { useAutenticacio } from "../lib/hooks/useAutenticacio";
import { onAuthStateChanged } from "firebase/auth";
import {
	auth,
	refUsuaris,
	refArtistes,
	refEspais,
	refEsdeveniments,
} from "../config/firebase/firebase";
import { onSnapshot } from "firebase/firestore";
import { useFormulariUsuari } from "../lib/hooks/useFormulariUsuari";
import { usedb } from "../lib/hooks/usedb";

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
			preferencies,
		},
		dbs: {
			dadesdbUsuaris,
			dadesdbArtistes,
			dadesdbEspais,
			dadesdbEsdeveniments,
		},
		setdbs,
		setDades,
		setDadesUsuari,
		setParaulesClau,
	} = usedb();

	const { handleGetUser } = useFormulariUsuari();

	const controlUsuari =
		usuariLoguejat &&
		`Usuari loguejat: 
	authID: ${usuariLoguejat.uid}
	usuariLoguejat: ${correuElectronic}
	administrador: ${administrador}
	nom: ${nom}
	cognom: ${cognom}
	poblacio: ${poblacio}
	codiPosatal: ${codiPostal}
	telefon: ${telefon};
	preferencies: ${preferencies}`;
	console.log(controlUsuari);
	console.log(
		preferencies,
		dadesdbUsuaris,
		dadesdbArtistes,
		dadesdbEspais,
		dadesdbEsdeveniments
	);

	useEffect(() => {
		/* const user2 = async () => await auth.currentUser?.uid.then((res) => console.log(res));
			console.log(user2);
		console.log("user2",user2); */
		const cancellaSubscripcio = () => {
			onAuthStateChanged(auth, async (user) => {
				setGestioUsuari({
					usuariLoguejat: user,
					loadingUsuari: false,
				});
				if (user !== null) {
					const usuari = await handleGetUser(user.uid);
					setDadesUsuari(usuari);
				}
			});
			onSnapshot(refUsuaris, (snapshot) => {
				const dadesdbUsuaris = snapshot.docs.map((doc) => ({ ...doc.data() }));
				setDades("dadesdbUsuaris", dadesdbUsuaris, setdbs);
				//console.log("Dades Usuaris: ", dadesdbUsuaris);
			});

			onSnapshot(refArtistes, (snapshot) => {
				const dadesdbArtistes = snapshot.docs.map((doc) => ({ ...doc.data() }));
				setDades("dadesdbArtistes", dadesdbArtistes, setdbs);
				//console.log("Dades Artistes: ", dadesdbArtistes);
			});

			onSnapshot(refEspais, (snapshot) => {
				const dadesdbEspais = snapshot.docs.map((doc) => ({ ...doc.data() }));
				setDades("dadesdbEspais", dadesdbEspais, setdbs);
				//console.log("Dades Espais: ", dadesdbEspais);
			});

			onSnapshot(refEsdeveniments, (snapshot) => {
				const dadesdbEsdeveniments = snapshot.docs.map((doc) => ({
					...doc.data(),
				}));
				setDades("dadesdbEsdeveniments", dadesdbEsdeveniments, setdbs);
				//console.log("Dades Esdeveniments: ", dadesdbEsdeveniments);
			});
		};
		return () => cancellaSubscripcio();
	}, []);

	const value = {
		usuariLoguejatComplet: usuariLoguejat === null ? null : usuariLoguejat,
		authID: usuariLoguejat === null ? null : usuariLoguejat.uid,
		usuariLoguejat: usuariLoguejat === null ? null : usuariLoguejat.email,
		dadesUsuari,
		correuElectronic,
		administrador,
		nom,
		cognom,
		poblacio,
		codiPostal,
		telefon,
		preferencies,
		setDades,
		setDadesUsuari,
		setParaulesClau,
		dadesdbUsuaris,
		dadesdbArtistes,
		dadesdbEspais,
		dadesdbEsdeveniments,
	};

	return (
		<Context.Provider value={value}>
			{!loadingUsuari && children}
		</Context.Provider>
	);
};

export default ContextProvider;
