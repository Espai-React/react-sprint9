export const actualitzarUsuari = async (
	e,
	nomRef,
	cognomRef,
	poblacioRef,
	codiPostalRef,
	telefonRef,
	nom,
	cognom,
	poblacio,
	codiPostal,
	telefon,
	usuariLoguejat,
	authID,
	dadesUsuari,
	navega,
	setProcesUsuari,
	actualitzarusuari
) => {
	e.preventDefault();
	setProcesUsuari({
		processant: false,
		error: "",
		missatge: "",
	});

	const {
		correuElectronic,
		administrador
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
