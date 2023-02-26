export const actualitzarUsuari = async (
	e,
	nomRef,
	cognomRef,
	poblacioRef,
	codiPostalRef,
	telefonRef,
	usuariLoguejat,
	authID,
	dadesUsuari,
	setProcesUsuari,
	actualitzarusuari,
	navega
) => {
	e.preventDefault();
	setProcesUsuari({
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
		correuElectronic,
		administrador,
		nom: nomRef.current.value === "" ? nom : nomRef.current.value,
		cognom: cognomRef.current.value === "" ? cognom : cognomRef.current.value,
		poblacio:
			poblacioRef.current.value === "" ? poblacio : poblacioRef.current.value,
		codiPostal:
			codiPostalRef.current.value === ""
				? codiPostal
				: codiPostalRef.current.value,
		telefon:
			telefonRef.current.value === "" ? telefon : telefonRef.current.value,
	};

	try {
		await actualitzarusuari("usuaris", authID, dadesUsuariNou);
		setProcesUsuari((prev) => ({
			...prev,
			missatge: `Usuari actualitzat: ${usuariLoguejat}`,
		}));
		navega("/usuari");
	} catch (err) {
		console.log(err.message);
		setProcesUsuari((prev) => ({
			...prev,
			error: `Error en actualitzar usuari`,
		}));
	}
	setProcesUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
