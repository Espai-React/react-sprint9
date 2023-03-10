import { Contenidor } from "./LlistaUsuari.styles";
import { useAppContext } from "../../../context/AppContext";
import { Subtitol } from "../../../styles/common/Subtitol.styles";
import { usePanellUsuari } from "../../../lib/hooks/usePanellUsuari";
import { useEffect } from "react";

const LlistaUsuari = ({ setArrayLlista }) => {
	const {
		preferencies,
		dadesdbArtistes,
		dadesdbEspais,
		dadesdbEsdeveniments,
	} = useAppContext();

	const { arrayLlistaUsuari, desplegar, idDesplegar } =
		usePanellUsuari();
	const arrayLlistaPanellUsuari = arrayLlistaUsuari(
		preferencies,
		dadesdbArtistes,
		dadesdbEsdeveniments,
		dadesdbEspais
	);
	const handleDesplegar = (e) => desplegar(e);	

	useEffect(
		() => setArrayLlista([preferencies, arrayLlistaPanellUsuari]),
		[dadesdbEsdeveniments]
	);

	return (
		<Contenidor>
			<div>
				<Subtitol>Esdeveniments de:</Subtitol>
				<div className="preferencies">
					<ul>
						{preferencies.map((preferencia, index) => (
							<li key={index}>{preferencia}</li>
						))}
					</ul>
				</div>
			</div>
			{arrayLlistaPanellUsuari.map((element, index) => {
				let esdevenimentLlista = element;
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
				} = esdevenimentLlista;

				return (
					<fieldset
						className="fieldset-llista"
						key={index}
						id={index}
						onClick={handleDesplegar}>
						<legend>{nomEsdeveniment}</legend>
						<div className={`${idDesplegar !== index ? "actiu" : "noActiu"}`}>
							<div className="element-resum">
								<div className="titol-resum">
									<span>{nomArtista}</span>
									<span>{nomEspai}</span>
								</div>
								<div>
									{`${dataEsdeveniment} -
									${horaEsdeveniment} -
									${preuEsdeveniment}`}
								</div>
							</div>
						</div>
						<div className={`${idDesplegar === index ? "actiu" : "noActiu"}`}>
							<ul>
								<li className="element-llista">
									<span>Artista:</span>
									{nomArtista}
								</li>
								<li className="element-llista">
									<span>Gènere:</span>
									{genereArtista}
								</li>
								<li className="element-llista">
									<span>Espai:</span>
									{nomEspai}
								</li>
								<li className="element-llista">
									<span>Data:</span>
									{dataEsdeveniment}
								</li>
								<li className="element-llista">
									<span>Hora: </span>
									{horaEsdeveniment}
								</li>
								<li className="element-llista">
									<span>Adreça: </span>
									{`${adreçaEspai}.
									${poblacioEspai}-${codiPostalEspai}`}
								</li>
								<li className="element-llista">
									<span>Preu: </span>
									{preuEsdeveniment}
								</li>
								<li className="element-llista">
									<span>Descripció: </span>
									{descripcioEsdeveniment}
								</li>
							</ul>
						</div>
					</fieldset>
				);
			})}
		</Contenidor>
	);
};

export default LlistaUsuari;
