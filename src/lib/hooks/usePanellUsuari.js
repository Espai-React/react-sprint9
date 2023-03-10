import { usedb } from "./usedb";
import { useState } from "react";
import { crearCorreu } from "../utils/crearCorreu";

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
				const { nom, artista, data, espai, hora, preu, descripcio } =
					esdeveniment;
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
					descripcioEsdeveniment: descripcio,
				};
				return esdevenimentLlista;
			})
			.filter((esdevenimentLlista) =>
				preferencies.includes(esdevenimentLlista.genereArtista)
			);
	};

	const desplegar = (e) => {
		const idFieldset = +e.target.closest(".fieldset-llista").id;
		idDesplegar === idFieldset
			? setIdDesplegar(-1)
			: setIdDesplegar(idFieldset);
	};

	const gestioText = (nomT, cognomT, arrayLlistaT) => {
		const [preferencies, arrayLlista] = arrayLlistaT;
		let data = new Date().toLocaleString("ca-ES");
		let titol = `ENVIVO: Resum Esdeveniments per a ${nomT} ${cognomT} a dia i hora: ${data}`;
		let preferenciesString = preferencies.join(", ");

		let llista = `<h3>Propers esdeveniments</h3>`;
		for (let i = 0; i < arrayLlista.length; i++) {
			const {
				nomEsdeveniment,
				nomArtista,
				genereArtista,
				dataEsdeveniment,
				nomEspai,
				adreçaEspai,
				poblacioEspai,
				codiPostalEspai,
				horaEsdeveniment,
				preuEsdeveniment,
				descripcioEsdeveniment,
			} = arrayLlista[i];

			llista += `<ul><h4><strong>${nomEsdeveniment}</strong></h4>`;
			llista += `
				<li>Artista: ${nomArtista}</li>
				<li>Gènere: ${genereArtista}</li>
				<li>Espai: ${nomEspai}</li>
				<li>Data\: ${dataEsdeveniment}</li>
				<li>Hora: ${horaEsdeveniment}</li>
				<li>Adreça: ${adreçaEspai}. ${codiPostalEspai} - ${poblacioEspai}</li>
				<li>Preu: ${preuEsdeveniment}</li>
				<li>Descripcio: ${descripcioEsdeveniment}</li>
				`;
			llista += `</ul><br>`
		}

		let cosHTML = `<h2>Selecció segons preferències</h2>
			<p>${preferenciesString}<p/>
			<br>
			<div> ${llista}</div>;
			<p><strong>equip ENVIVO</p>
			<p>&copy; 2023 LlopFilms</p></strong>`;

		return { titol, cosHTML };
	};

	const enviarCorreu = (correuElectronic, nom, cognom, arrayLlista) => {
		const { titol, cosHTML } =  gestioText(nom, cognom, arrayLlista);
		const contingutCorreu = {
			to: correuElectronic,
			message: {
				subject: titol,
				html: cosHTML,
			}, 
		};
		console.log(contingutCorreu);
		crearCorreu(contingutCorreu, afegirElement, setProcesCorreuElectronic);
	};

	const enviarWhatsapp = (telefon, correuElectronic, nom, cognom, arrayLlista) => {
		
	}

	return {
		arrayLlistaUsuari,
		desplegar,
		idDesplegar,
		enviarCorreu,
		enviarWhatsapp,
	};
};
