export const signUp = async (
	e,
	correuElectronicRef,
	claudePasRef,
	clauePasConfirmacioRef,
	usuariLoguejat,
	setLogueigUsuari,
	signup,
	navega
) => {
	e.preventDefault();
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});
	if (claudePasRef.current.value !== clauePasConfirmacioRef.current.value) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Les contrasenyes no coincideixen",
		}));

		return;
	}

	try {
		await signup(correuElectronicRef.current.value, claudePasRef.current.value);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Nou usuari: ${usuariLoguejat}`,
		}));
		navega("/panellusuari");
	} catch (err) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Error en crear nou usuari",
		}));
	}
	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
