export const crearCorreu = async (
	contingutCorreu,
	afegirElement,
	setProcesCorreuElectronic
) => {
	setProcesCorreuElectronic({
		processant: false,
		error: "",
		missatge: "",
	});

	try {
		await afegirElement("correusElectronics", contingutCorreu);
		setProcesCorreuElectronic((prev) => ({
			...prev,
			missatge: `Correu electrònic creat correctament`,
		}));
	} catch (err) {
		setProcesCorreuElectronic((prev) => ({
			...prev,
			error: "Error en crear nou correu electrònic",
		}));
	}
	setProcesCorreuElectronic((prev) => ({
		...prev,
		processant: false,
	}));
};
