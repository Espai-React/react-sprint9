
import { Formulari } from "../../../styles/common/Formulari.styles";
import BlocInput from "../../common/BlocInput";
import Boto from "../../common/Boto";
import { usedb } from "../../../lib/hooks/usedb";
import { useFormulariEspai } from "../../../lib/hooks/useFormulariEspai";

const FormulariAltaEspai = () => {
	const { dadesEspai, setDades, setDadesEspai } = usedb();

	const { error, missatge, processant, handleSubmitAltaEspai } =
		useFormulariEspai();

	const handleSubmit = (e) =>
		handleSubmitAltaEspai(e, dadesEspai);

	return (
		<Formulari id="altaEspai" onSubmit={handleSubmit}>
			<BlocInput
				etiqueta="Nom"
				tipus="text"
				nom="nom"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Adreça"
				tipus="text"
				nom="adreça"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Població"
				tipus="text"
				nom="poblacio"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Codi Postal"
				tipus="text"
				nom="codPostal"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Persona de Contacte"
				tipus="text"
				nom="personaContacte"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Correu Electrònic"
				tipus="text"
				nom="correuElectronic"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Telèfon"
				tipus="text"
				nom="telefon"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Perfil d'Instagram"
				tipus="text"
				nom="instagram"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Pàgina web"
				tipus="text"
				nom="web"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Aforament"
				tipus="text"
				nom="aforament"
				onChange={(e) => setDades(e.target.name, e.target.value, setDadesEspai)}
				requerit={false}
			/>

			<div className="avis">
				{error ? (
					<span>{error}</span>
				) : (
					<span>
						{missatge === "Els camps marcats amb * són obligatoris"
							? ""
							: missatge}
					</span>
				)}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Crear registre espai
			</Boto>
		</Formulari>
	);
};

export default FormulariAltaEspai;
