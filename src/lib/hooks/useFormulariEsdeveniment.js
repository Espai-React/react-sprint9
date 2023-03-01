import { useState } from "react";
import { usedb } from "./usedb";
import { altaEsdeveniment } from "../utils/administrador/altaEsdeveniment";

export const useFormulariEsdeveniment = () => {
	const { afegirElement } = usedb();

	const [procesEsdeveniment, setProcesEsdeveniment] = useState({
		processant: false,
		error: "",
		missatge: "",
	});

	const handleSubmitAltaEsdeveniment = (e, dadesEsdeveniment) =>
		altaEsdeveniment(e, dadesEsdeveniment, setProcesEsdeveniment, afegirElement);

	return {
		error: procesEsdeveniment.error,
		processant: procesEsdeveniment.processant,
		missatge: procesEsdeveniment.missatge,
		handleSubmitAltaEsdeveniment,
	};
};
