export const altaArtista = async (
	e,
	dadesArtista,
	setProcesArtista,
	afegirElement
) => {
	e.preventDefault();
	setProcesArtista({
		processant: false,
		error: "",
		missatge: "",
	});
	const { nom } = dadesArtista;

	try {
		await afegirElement("artistes", dadesArtista);
		document.getElementById("altaArtista").reset();
		setProcesArtista((prev) => ({
			...prev,
			missatge: `Alta artista: ${nom}`,
		}));
	} catch (err) {
		setProcesArtista((prev) => ({
			...prev,
			error: "Error en crear nou registre d'artista",
		}));
	}
	setProcesArtista((prev) => ({
		...prev,
		processant: false,
	}));
};
