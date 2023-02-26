import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuaris } from "./useUsuaris";
import { crearUsuari } from "../utils/usuari/crearUsuari";
import { obtenirUsuari } from "../utils/usuari/obtenirUsuari";
import { actualitzarUsuari } from "../utils/usuari/actualitzarUsuari";
import { useAppContext } from "../../context/AppContext";

export const useFormulariUsuari = (
	nomRef,
	cognomRef,
	poblacioRef,
	codiPostalRef,
	telefonRef
) => {
	const { usuariLoguejat, authID, dadesUsuari } = useAppContext();
	console.log(usuariLoguejat, authID, dadesUsuari);

	const { setDadesUsuari, crearusuari, obtenirusuari, actualitzarusuari } =
		useUsuaris();

	const [procesUsuari, setProcesUsuari] = useState({
		processant: false,
		error: "",
		missatge: "",
	});

	const handleCreateUser = () =>
		crearUsuari(
			dadesUsuari,
			setDadesUsuari,
			setProcesUsuari,
			crearusuari,
			usuariLoguejat,
			authID,
			administrador
		);
 
	const handleGetUser = (authID) =>
		obtenirUsuari(setProcesUsuari, obtenirusuari, authID);

	const handleSubmitActualitzarUsuari = (e) => {
		//const navega = useNavigate();
		actualitzarUsuari(
			e,
			nomRef,
			cognomRef,
			poblacioRef,
			codiPostalRef,
			telefonRef,
			usuariLoguejat,
			authID,
			dadesUsuari,
			setProcesUsuari,
			actualitzarusuari,
			navega
		);
	};

	return {
		error: procesUsuari.error,
		processant: procesUsuari.processant,
		missatge: procesUsuari.missatge,
		handleCreateUser,
		handleGetUser,
		handleSubmitActualitzarUsuari,
	};
};
