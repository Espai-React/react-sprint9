export const crearUsuari = async (
	dadesUsuari,
	setDadesUsuari,
	setProcesUsuari,
	crearusuari,
	usuariLoguejat,
	authID,
	administrador
) => {
	console.log(usuariLoguejat, authID, administrador);

	setProcesUsuari({
		processant: false,
		error: "",
		missatge: "",
	});
	await setDadesUsuari((prev) => ({
		
		authID,
		correuElectronic: usuariLoguejat,
		administrador,
		nom: "nom2",
		cognom: "cognom2",
		telefon: "telefon2",
	}));
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
