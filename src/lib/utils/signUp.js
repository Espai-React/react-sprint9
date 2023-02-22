export const signUp = async (
	e,
	correuElectronicRef,
	claudePasRef,
	clauePasConfirmacioRef,
	usuariLoguejat,
	setLogueigUsuari,
	signup,
	setusuari,
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

	let dadesSignUp =
		claudePasRef.current.value === import.meta.env.VITE_APP_ADMIN_CLAUEPAS
			? {
					correuElectronic: correuElectronicRef.current.value,
					administrador: true,
				}
			: {
					correuElectronic: correuElectronicRef.current.value,
					administrador: false,
				};

	try {
		const usuari = await signup(
			correuElectronicRef.current.value,
			claudePasRef.current.value
		);
		await setusuari("usuaris", usuari.user.uid, dadesSignUp);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Nou usuari: ${usuariLoguejat}`,
		}));
		dadesSignUp.administrador ? navega("/admin") : navega("/usuari");
	} catch (err) {
		console.log(err.message);
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
