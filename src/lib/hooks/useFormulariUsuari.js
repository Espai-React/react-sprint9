import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actualitzarDetallsUsuari } from "../utils/actualitzaUsuari";
import { useUsuaris } from "./useUsuaris";
import { crearUsuari } from "../utils/crearUsuari";

export const useFormulariUsuari = (usuariLoguejat, id, administrador) => {
	const { dadesUsuari, setDadesUsuari, crearusuari, actualitzarusuari } =
		useUsuaris(usuariLoguejat, id, administrador);

	const navega = useNavigate();

	const [procesUsuari, setProcesUsuari] = useState({
		processant: false,
		error: "",
		missatge: "",
	});

	const handleCreateUser = () =>
		crearUsuari(dadesUsuari, setProcesUsuari, crearusuari);

	const handleSubmitDetailsUsuari = (e) =>
		actualitzarDetallsUsuari(
			e,
			nomRef,
			cognomRef,
			telefonRef,
			dadesUsuari,
			setProcesUsuari,
			actualitzarusuari,
			navega
		);

	return {
		error: procesUsuari.error,
		processant: procesUsuari.processant,
		missatge: procesUsuari.missatge,
		handleCreateUser,
		handleSubmitDetailsUsuari,
	};
};
