import { Formulari } from "../../../styles/common/Formulari.styles";
import BlocInput from "../../common/BlocInput";
import Boto from "../../common/Boto";
import { usedb } from "../../../lib/hooks/usedb";
import { useFormulariEsdeveniment } from '../../../lib/hooks/useFormulariEsdeveniment';


const FormulariAltaEsdeveniment = () => {
	const { dadesEsdeveniment, setDades, setDadesEsdeveniment } = usedb();

	const { error, missatge, processant, handleSubmitAltaEsdeveniment } =
		useFormulariEsdeveniment();

	const handleSubmit = (e) =>
		handleSubmitAltaEsdeveniment(e, dadesEsdeveniment);

	return (
		<Formulari id="altaEsdeveniment" onSubmit={handleSubmit}>
			<BlocInput
				etiqueta="Nom esdeveniment *"
				tipus="text"
				nom="nom"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesEsdeveniment)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Artista *"
				tipus="text"
				nom="artista"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesEsdeveniment)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Espai *"
				tipus="text"
				nom="espai"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesEsdeveniment)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Data *"
				tipus="text"
				nom="data"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesEsdeveniment)
				}
				requerit={true}
				/>
			<BlocInput
				etiqueta="Hora *"
				tipus="text"
				nom="hora"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesEsdeveniment)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Preu *"
				tipus="text"
				nom="preu"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesEsdeveniment)
				}
				requerit={true}
			/>

			<div className="avis">
				{missatge && <span>{missatge}</span>}
				{error && <span>{error}</span>}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Crear registre esdeveniment
			</Boto>
		</Formulari>
	);
};

export default FormulariAltaEsdeveniment;
