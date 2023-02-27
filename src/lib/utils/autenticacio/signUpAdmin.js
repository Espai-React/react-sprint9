export const signUpAdmin = async (
	e,
	dadesUsuari,
	claudePasConfirmacioRef,
	usuariLoguejat,
	navega,
	setLogueigUsuari,
	signup,
	setusuari
) => {
	e.preventDefault();
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});

	const { correuElectronic, claudePas, administrador } = dadesUsuari;

	if (claudePas !== claudePasConfirmacioRef.current.value) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Les contrasenyes no coincideixen",
		}));
		return;
	}

	try {
		const usuari = await signup(correuElectronic, claudePas);
		await setusuari("usuaris", usuari.user.uid, dadesUsuari);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Nou usuari: ${usuariLoguejat}`,
		}));
		administrador ? navega("/admin") : navega("/usuari");
	} catch (err) {
		let error;
		switch (err.message) {
			case "Firebase: Error (auth/email-already-in-use).":
				error = "Correu electrònic ja en ús";
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
