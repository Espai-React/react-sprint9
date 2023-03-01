export const altaEspai = async (
	e,
	dadesEspai,
	setProcesEspai,
	afegirElement
) => {
	e.preventDefault();
	setProcesEspai({
		processant: false,
		error: "",
		missatge: "",
	});
	const { nom } = dadesEspai;

	try {
		await afegirElement("espais", dadesEspai);
		document.getElementById("altaEspai").reset();
		setProcesEspai((prev) => ({
			...prev,
			missatge: `Alta Espai: ${nom}`,
		}));
	} catch (err) {
		setProcesEspai((prev) => ({
			...prev,
			error: "Error en crear nou registre d'Espai",
		}));
	}
	setProcesEspai((prev) => ({
		...prev,
		processant: false,
	}));
};
