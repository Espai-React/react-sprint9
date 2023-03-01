export const altaEsdeveniment = async (
	e,
	dadesEsdeveniment,
	setProcesEsdeveniment,
	afegirElement
) => {
	console.log(dadesEsdeveniment);
	e.preventDefault();
	setProcesEsdeveniment({
		processant: false,
		error: "",
		missatge: "",
	});
	const { nom } = dadesEsdeveniment;

	try {
		await afegirElement("esdeveniments", dadesEsdeveniment);
		document.getElementById("altaEsdeveniment").reset();
		setProcesEsdeveniment((prev) => ({
			...prev,
			missatge: `Alta Esdeveniment: ${nom}`,
		}));
	} catch (err) {
		console.log(err.message);
		setProcesEsdeveniment((prev) => ({
			...prev,
			error: "Error en crear nou registre d'esdeveniment",
		}));
	}
	setProcesEsdeveniment((prev) => ({
		...prev,
		processant: false,
	}));
};
