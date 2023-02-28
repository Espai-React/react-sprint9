export const actualitzarUsuari = async (
	e,
	dadesUsuari,
	usuariLoguejat,
	authID,
	navega,
	setProcesUsuari,
	actualitzarusuari
) => {
	e.preventDefault();
	setProcesUsuari({
		processant: false,
		error: "",
		missatge: "",
	});

	try {
		await actualitzarusuari("usuaris", authID, dadesUsuari);
		setProcesUsuari((prev) => ({
			...prev,
			missatge: `Usuari actualitzat: ${usuariLoguejat}`,
		}));
		navega("/usuari");
	} catch (err) {
	setProcesUsuari((prev) => ({
			...prev,
			error: `Error en actualitzar usuari`,
		}));
	}
	setProcesUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
