import { useState } from "react";
import { usedb } from "./usedb";
import { altaEspai } from "../utils/administrador/altaEspai";

export const useFormulariEspai = () => {
	const { afegirElement } = usedb();

	const [procesEspai, setProcesEspai] = useState({
		processant: false,
		error: "",
		missatge: "",
	});

	const handleSubmitAltaEspai = (e, dadesEspai) =>
		altaEspai(e, dadesEspai, setProcesEspai, afegirElement);

	return {
		error: procesEspai.error,
		processant: procesEspai.processant,
		missatge: procesEspai.missatge,
		handleSubmitAltaEspai,
	};
};
