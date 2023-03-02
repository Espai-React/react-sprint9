
import { Formulari } from "../../../styles/common/Formulari.styles";
import BlocInput from "../../common/BlocInput";
import Boto from "../../common/Boto";
import { usedb } from "../../../lib/hooks/usedb";
import { useFormulariArtista } from '../../../lib/hooks/useFormulariArtista';


const FormulariAltaArtista = () => {
	const { dadesArtista, setDades, setDadesArtista } = usedb();

	const { error, missatge, processant, handleSubmitAltaArtista } =
		useFormulariArtista();

	const handleSubmit = (e) =>
		handleSubmitAltaArtista(e, dadesArtista);

	return (
		<Formulari id="altaArtista" onSubmit={handleSubmit}>
			<BlocInput
				etiqueta="Nom *"
				tipus="text"
				nom="nom"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Gènere *"
				tipus="text"
				nom="genere"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Persona de Contacte *"
				tipus="text"
				nom="personaContacte"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Correu electrònic"
				tipus="text"
				nom="correuElectronic"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Número de telèfon *"
				tipus="text"
				nom="telefon"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Compte d'Instagram"
				tipus="text"
				nom="instagram"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Adreça lloc web"
				tipus="text"
				nom="web"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Compte de Youtube"
				tipus="text"
				nom="youTube"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Catxet *"
				tipus="text"
				nom="catxet"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesArtista)
				}
				requerit={true}
			/>

			<div className="avis">
				{missatge && <span>{missatge}</span>}
				{error && <span>{error}</span>}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Crear registre artista
			</Boto>
		</Formulari>
	);
};

export default FormulariAltaArtista;
