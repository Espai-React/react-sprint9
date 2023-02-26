export const obtenirUsuari = async (
	setProcesUsuari,
	obtenirusuari,
	authID
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
			missatge: `Nou usuari obtingut: ${usuari.email}`,
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
