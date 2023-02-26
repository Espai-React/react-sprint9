import { useRef } from "react";
import { Formulari } from "../../styles/common/Formulari.styles";
import BlocInput from "../common/BlocInput";
import Boto from "../common/Boto";
import { useFormulariUsuari } from "../../lib/hooks/useFormulariUsuari";
import { useAppContext } from "../../context/AppContext";

const FormulariActualitzarUsuari = () => {
	const {
		nom,
		cognom,
		poblacio,
		codiPostal,
		telefon,
	} = useAppContext();
	const nomRef = useRef();
	const cognomRef = useRef();
	const poblacioRef = useRef();
	const codiPostalRef = useRef();
	const telefonRef = useRef();

	const { error, processant, missatge, handleSubmitActualitzarUsuari } =
		useFormulariUsuari(
			nomRef,
			cognomRef,
			poblacioRef,
			codiPostalRef,
			telefonRef
		);

	return (
		<Formulari id="dadesUsuari" onSubmit={handleSubmitActualitzarUsuari}>
			<BlocInput
				etiqueta="Nom nou"
				tipus="text"
				nom="nom"
				referencia={nomRef}
				requerit={false}
				placeholder={nom}
			/>
			<BlocInput
				etiqueta="Cognom nou"
				tipus="text"
				nom="cognom"
				referencia={cognomRef}
				requerit={false}
				placeholder={cognom}
			/>
			<BlocInput
				etiqueta="Població nova"
				tipus="text"
				nom="Poblacio"
				referencia={poblacioRef}
				requerit={false}
				placeholder={poblacio}
			/>
			<BlocInput
				etiqueta="Codi Postal nou"
				tipus="text"
				nom="Codi Postal"
				referencia={codiPostalRef}
				requerit={false}
				placeholder={codiPostal}
			/>
			<BlocInput
				etiqueta="Número de telèfon nou"
				tipus="tel"
				nom="telèfon"
				referencia={telefonRef}
				requerit={false}
				placeholder={telefon}
			/>
			<div className="avis">
				{missatge && <span>{missatge}</span>}
				{error && <span>{error}</span>}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Aplicar canvis
			</Boto>
		</Formulari>
	);
};

export default FormulariActualitzarUsuari;
