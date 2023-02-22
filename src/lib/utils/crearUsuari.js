export const crearUsuari = async (
	dadesUsuari,
	setDadesUsuari,
	setProcesUsuari,
	crearusuari,
	usuariLoguejat,
	authID,
	administrador
) => {
	setProcesUsuari({
		processant: false,
		error: "",
		missatge: "",
	});	
	
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
