export const signUp = async (
	e,
	correuElectronicRef,
	claudePasRef,
	claudePasConfirmacioRef,
	nomRef,
	cognomRef,
	poblacioRef,
	codiPostalRef,
	telefonRef,
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

	if (claudePasRef.current.value !== claudePasConfirmacioRef.current.value) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Les contrasenyes no coincideixen",
		}));
		return;
	}

	const condAdmin =
		claudePasRef.current.value === import.meta.env.VITE_APP_ADMIN_CLAUEPAS;
	let dadesSignUp = {
		correuElectronic: correuElectronicRef.current.value,
		administrador: condAdmin ? true : false,
		nom: nomRef.current.value,
		cognom: cognomRef.current.value,
		poblacio: poblacioRef.current.value,
		codiPostal: codiPostalRef.current.value,
		telefon: telefonRef.current.value,
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
