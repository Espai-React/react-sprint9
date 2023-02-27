export const actualitzarPerfil = async (
	e,
	nouCorreuElectronicRef,
	novaClaudePasRef,
	novaClaudePasConfirmacioRef,
	usuariLoguejatComplet,
	usuariLoguejat,
	authID,
	dadesUsuari,
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

	const {
		correuElectronic,
		administrador,
		nom,
		cognom,
		poblacio,
		codiPostal,
		telefon,
	} = dadesUsuari;

	let dadesUsuariNou = {
		correuElectronic:
			nouCorreuElectronicRef.current.value === ""
				? correuElectronic
				: nouCorreuElectronicRef.current.value,
		administrador,
		nom,
		cognom,
		poblacio,
		codiPostal,
		telefon,
	};

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
		await updateemail(
			usuariLoguejatComplet,
			nouCorreuElectronicRef.current.value
		);
		await updatepassword(usuariLoguejatComplet, novaClaudePasRef.current.value);
		await actualitzarusuari("usuaris", authID, dadesUsuariNou);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Usuari actualitzat: ${usuariLoguejat}`,
		}));
		navega("/usuari");
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
