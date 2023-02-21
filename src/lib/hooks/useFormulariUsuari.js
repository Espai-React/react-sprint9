import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actualitzarDetallsUsuari } from "../utils/actualitzaUsuari";
import { useUsuaris } from "./useUsuaris";
import { crearUsuari } from "../utils/crearUsuari";

export const useFormulariUsuari = (usuariLoguejat, authID, administrador) => {
	const { dadesUsuari, setDadesUsuari, crearusuari, actualitzarusuari } =
		useUsuaris();
	const navega = useNavigate();

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

	const handleSubmitDetailsUsuari = (e) =>
		actualitzarDetallsUsuari(
			e,
			nomRef,
			cognomRef,
			telefonRef,
			dadesUsuari,
			setDadesUsuari,
			setProcesUsuari,
			actualitzarusuari,
			navega
		);

	return {
		error: procesUsuari.error,
		processant: procesUsuari.processant,
		missatge: procesUsuari.missatge,
		dadesUsuari,
		setDadesUsuari,
		handleCreateUser,
		handleSubmitDetailsUsuari,
	};
};
