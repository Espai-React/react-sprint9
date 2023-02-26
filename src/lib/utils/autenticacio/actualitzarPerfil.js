export const actualitzarPerfil = async (
	e,
	correuElectronicRef,
	claudePasRef,
	usuariLoguejat,
	setLogueigUsuari,
	updateemail,
	updatepassword,
	authID,
	dadesUsuari,
	actualitzarusuari,
	navega
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
			correuElectronicRef.current.value === ""
				? correuElectronic
				: correuElectronicRef.current.value,
		administrador,
		nom,
		cognom,
		poblacio,
		codiPostal,
		telefon,
	};

	try {
		await updateemail(correuElectronicRef.current.value);
		await updatepassword(claudePasRef.current.value);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Nou usuari: ${usuariLoguejat}`,
		}));
		await actualitzarusuari("usuaris", authID, dadesUsuariNou);
		navega("/usuari");
	} catch (err) {
		console.log(err.message);
		let error;
		switch (err.message) {
			case "Firebase: Error (auth/requires-recent-login).":
				error = "Torneu a iniciar sessió, per poder realitzar els canvis";
				break;
			default:
				error = "Error en crear nou usuari";
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
