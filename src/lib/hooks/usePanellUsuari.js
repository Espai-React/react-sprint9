import { usedb } from "./usedb";
import { useState } from "react";
import { crearCorreu } from '../utils/crearCorreu';

export const usePanellUsuari = () => {
	const [procesCorreuElectronic, setProcesCorreuElectronic] = useState({
		processant: false,
		error: "",
		missatge: "",
	});
	const [idDesplegar, setIdDesplegar] = useState(-1);
	let { esdevenimentLlista, afegirElement } = usedb();

	const arrayLlistaUsuari = (
		preferencies,
		dadesdbArtistes,
		dadesdbEsdeveniments,
		dadesdbEspais
	) => {
		return dadesdbEsdeveniments
			.map((esdeveniment) => {
				const { nom, artista, data, espai, hora, preu } = esdeveniment;
				const artistaObj = dadesdbArtistes.find(
					(element) => element.nom === artista
				);
				const { genere: genereArtista } = artistaObj;
				const espaiObj = dadesdbEspais.find((element) => element.nom === espai);
				const {
					adreça: adreçaEspai,
					poblacio: poblacioEspai,
					codiPostal: codiPostalEspai,
				} = espaiObj;

				esdevenimentLlista = {
					nomEsdeveniment: nom,
					nomArtista: artista,
					genereArtista: genereArtista,
					dataEsdeveniment: data,
					nomEspai: espai,
					adreçaEspai: adreçaEspai,
					poblacioEspai: poblacioEspai,
					codiPostalEspai: codiPostalEspai,
					horaEsdeveniment: hora,
					preuEsdeveniment: preu,
					descripcioEsdeveniment:
						" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus nisi, elementum et tempus vitae, elementum ut ex. Praesent sollicitudin lacus quis orci convallis tincidunt. Cras blandit pellentesque justo et porta. Aenean efficitur maximus eros at rhoncus. Morbi ultrices lacus vitae vehicula finibus. Sed malesuada finibus risus, eget placerat mauris consectetur ut.",
				};
				return esdevenimentLlista;
			})
			.filter((esdevenimentLlista) =>
				preferencies.includes(esdevenimentLlista.genereArtista)
			);
	};

	const enviarCorreu = (correuElectronic, nom, cognom, llistaRef) => {
		console.log(correuElectronic, nom, cognom, llistaRef.target);

/* 




		const contingutCorreu = {
			to: adreça,
			message: {
				subject: titol,
				text: cos,
				html: cos,
			},
		};
		crearCorreu(contingutCorreu, afegirElement, setProcesCorreuElectronic); */
	};

	return { arrayLlistaUsuari, idDesplegar, setIdDesplegar, enviarCorreu };
};
