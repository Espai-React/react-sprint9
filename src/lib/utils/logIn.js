export const logIn = async (
	e,
	correuElectronicRef,
	claudePasRef,
	usuariLoguejat,
	setLogueigUsuari,
	login,
	navega
) => {
	e.preventDefault();
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});

	try {
		await login(correuElectronicRef.current.value, claudePasRef.current.value);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Nova sessió usuari: ${usuariLoguejat}`,
		}));
		navega("/panellusuari");
	} catch (err) {
		let error;
		switch (err.message) {
			case "Firebase: Error (auth/user-not-found).":
				error = "Correu electrònic incorrecte";
				break;
			case "Firebase: Error (auth/wrong-password).":
				error = "Constrasenya incorecta";
				break;
			default:
				error = "Error càrrega sesssió usuari";
				break;
		}
		setLogueigUsuari((prev) => ({
			...prev,
			error: error,
		}));
	}
	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
