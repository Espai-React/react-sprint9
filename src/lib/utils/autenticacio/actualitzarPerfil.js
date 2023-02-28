export const actualitzarPerfil = async (
	e,
	dadesUsuari,
	novaClaudePasRef,
	novaClaudePasConfirmacioRef,
	usuariLoguejatComplet,
	usuariLoguejat,
	authID,
	navega,
	setLogueigUsuari,
	updateemail,
	updatepassword,
	actualitzarusuari
) => {
	e.preventDefault();
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});

	const { correuElectronic, administrador } = dadesUsuari;
	if (
		novaClaudePasRef.current.value !== novaClaudePasConfirmacioRef.current.value
	) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Les contrasenyes no coincideixen",
		}));
		return;
	}

	try {
		await updateemail(usuariLoguejatComplet, correuElectronic);
		await updatepassword(usuariLoguejatComplet, novaClaudePasRef.current.value);
		await actualitzarusuari("usuaris", authID, dadesUsuari);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Usuari actualitzat: ${usuariLoguejat}`,
		}));
		console.log(dadesUsuari);
		administrador ? navega("/admin") : navega("/usuari");
	} catch (err) {
		console.log(err.message);
		let error;
		switch (err.message) {
			case "Firebase: Error (auth/requires-recent-login).":
				error = "Torneu a iniciar sessió, per poder realitzar els canvis";
				break;
			default:
				error = "Error en actualitzar usuari";
				break;
		}
		setLogueigUsuari((prev) => ({
			...prev,
			error,
		}));
	}
	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
