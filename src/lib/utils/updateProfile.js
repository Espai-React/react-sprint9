export const updateProfile = (
	e,
	correuElectronicRef,
	claudePasRef,
	clauePasConfirmacioRef,
	usuariLoguejat,
	setLogueigUsuari,
	updateemail,
	updatepassword,
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
	let promeses = []
	if (correuElectronicRef.current.value !== usuariLoguejat) promeses.push(updateemail(correuElectronicRef.current.value));
	if (claudePasRef.current.value) promeses.push(updatepassword(claudePasRef.current.value));

	try {
		Promise.all(promeses);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: "Canvis realitzats corectament",
		}));
		navega("/usuari");
	} catch (err) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Error en actualitzar usuari",
		}));
	}
	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	})); 
};
