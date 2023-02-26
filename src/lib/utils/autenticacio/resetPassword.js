export const resetPassword = async (	
	e,
	correuElectronicRef,
	setLogueigUsuari,
	resetpassword
) => {
	e.preventDefault();
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});
	
	try {
		await resetpassword(correuElectronicRef.current.value);
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: "Seguiu les instruccions rebudes a la vostra bústia d'entrada",
		}));
	} catch (err) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Error en enviar correu nova constrasenya",
		}));
	}
	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
