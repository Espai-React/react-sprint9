export const obtenirUsuari = async (
	setProcesUsuari,
	obtenirusuari,
	authID,
	usuariLoguejat
) => {
	setProcesUsuari({
		processant: false,
		error: "",
		missatge: "",
	});
	let usuari;
	try {
		usuari = (await obtenirusuari("usuaris", authID)).data();
		setProcesUsuari((prev) => ({
			...prev,
			missatge: `Nou usuari obtingut: ${usuariLoguejat}`,
		}));
	} catch (err) {
		setProcesUsuari((prev) => ({
			...prev,
			error: `Error en obtenir usuari`,
		}));
	}
	setProcesUsuari((prev) => ({
		...prev,
		processant: false,
	}));
	return usuari;
};
