import { useState } from "react";
import { useUsuaris } from "./useUsuaris";
import { crearUsuari } from "../utils/usuari/crearUsuari";
import { obtenirUsuari } from "../utils/usuari/obtenirUsuari";
import { actualitzarUsuari } from "../utils/usuari/actualitzarUsuari";

export const useFormulariUsuari = () => {
	const {
		dadesUsuari,
		setDadesUsuari,
		crearusuari,
		actualitzarusuari,
		obtenirusuari
	} = useUsuaris();

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

	const handleSubmitActualitzarUsuari = (
		e,
		dadesUsuari,
		usuariLoguejat,
		authID,
		navega
	) => {
		actualitzarUsuari(
			e,
			dadesUsuari,
			usuariLoguejat,
			authID,
			navega,
			setProcesUsuari,
			actualitzarusuari
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
