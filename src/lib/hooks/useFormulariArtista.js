import { useState } from "react";
import { usedb } from "./usedb";
import { altaArtista } from "../utils/administrador/altaArtista";

export const useFormulariArtista = () => {
	const { afegirElement } = usedb();

	const [procesArtista, setProcesArtista] = useState({
		processant: false,
		error: "",
		missatge: "",
	});

	const handleSubmitAltaArtista = (e, dadesArtista) =>
		altaArtista(e, dadesArtista, setProcesArtista, afegirElement);

	return {
		error: procesArtista.error,
		processant: procesArtista.processant,
		missatge: procesArtista.missatge,
		handleSubmitAltaArtista,
	};
};
