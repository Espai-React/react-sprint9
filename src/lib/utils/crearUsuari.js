export const crearUsuari = async (
	dadesUsuari,
	setProcesUsuari,
	crearusuari
) => {
	setProcesUsuari({
		processant: false,
		error: "",
		missatge: "",
	});
	console.log(dadesUsuari);
	try {
		await crearusuari(dadesUsuari);
		setProcesUsuari((prev) => ({			
			...prev,
			missatge: `Nou usuari creat: ${dadesUsuari.correuElectronic}`,
		}));
	} catch (err) {
		setProcesUsuari((prev) => ({
			...prev,
			error: `Error en crear usuari: ${dadesUsuari.correuElectronic}`,
		}));
	}
	setProcesUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
