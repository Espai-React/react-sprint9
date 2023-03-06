import { Contenidor } from "./LlistaUsuari.styles";
import { useAppContext } from "../../../context/AppContext";
import { Subtitol } from "../../../styles/common/Subtitol.styles";
import { usePanellUsuari } from "../../../lib/hooks/usePanellUsuari";

const LlistaUsuari = () => {
	const {
		nom,
		cognom,
		preferencies,
		dadesdbArtistes,
		dadesdbEspais,
		dadesdbEsdeveniments,
	} = useAppContext();
	console.log(
		nom,
		cognom,
		preferencies,
		dadesdbArtistes,
		dadesdbEsdeveniments,
		dadesdbEspais
	);

	const { arrayLlistaUsuari, idDesplegar, setIdDesplegar } = usePanellUsuari();
	const arrayllistaPanellUsuari = arrayLlistaUsuari(
		preferencies,
		dadesdbArtistes,
		dadesdbEsdeveniments,
		dadesdbEspais
	);

	const handleDesplegar = (e) => {
		const idFieldset = +e.target.closest(".fieldset-llista").id;
		idDesplegar === idFieldset
			? setIdDesplegar(-1)
			: setIdDesplegar(idFieldset);
	};

	console.log(idDesplegar);

	return (
		<Contenidor>
			<div>
				<Subtitol>Esdeveniments de:</Subtitol>
				<div className="preferencies">
					<ul>
						{preferencies.map((preferencia, index) => (
							<li key={index}>
								{preferencia[0].toUpperCase() + preferencia.substring(1)}
							</li>
						))}
					</ul>
				</div>
			</div>
			{arrayllistaPanellUsuari.map((esdevenimentLlista, index) => {
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
									<span>{nomArtista}</span><span> - </span>
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
									<span>Descricpió: </span>
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
