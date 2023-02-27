export const logOut = async (
	usuariLoguejat,
	setLogueigUsuari,
	logout,
	navega
) => {
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});
	try {
		await logout();
		setLogueigUsuari({
			error: "",
			processant: true,
			missatge: `Ha sortit de la sessió usuari: ${usuariLoguejat}`,
		});
		navega("/");
	} catch (err) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Error en sortir de la sessió",
		}));
	}
	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
