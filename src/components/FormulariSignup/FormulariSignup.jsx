import { useRef } from "react";
import { Formulari } from "../../styles/common/Formulari.styles";
import BlocInput from "../common/BlocInput";
import Boto from "../common/Boto";
import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";

const FormulariSignup = () => {
	const correuElectronicRef = useRef();
	const claudePasRef = useRef();
	const claudePasConfirmacioRef = useRef();
	const nomRef = useRef();
	const cognomRef = useRef();
	const poblacioRef = useRef();
	const codiPostalRef = useRef();
	const telefonRef = useRef();

	const { error, missatge, processant, handleSubmitSignup } = useFormulariAutenticacio(
		correuElectronicRef,
		claudePasRef,
		claudePasConfirmacioRef,
		nomRef,
		cognomRef,
		poblacioRef,
		codiPostalRef,
		telefonRef
	);

	return (
		<Formulari id="signup" onSubmit={handleSubmitSignup}>
			<BlocInput
				etiqueta="Correu electrònic *"
				tipus="email"
				nom="correuElectronic"
				referencia={correuElectronicRef}
				requerit={true}
			/>

			<BlocInput
				etiqueta="Contrasenya *"
				tipus="password"
				nom="claudePas"
				referencia={claudePasRef}
				requerit={true}
			/>

			<BlocInput
				etiqueta="Confirmació contrasenya *"
				tipus="password"
				nom="claudePasConfirmacio"
				referencia={claudePasConfirmacioRef}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Nom *"
				tipus="text"
				nom="nom"
				referencia={nomRef}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Cognom"
				tipus="text"
				nom="cognom"
				referencia={cognomRef}
				requerit={false}

			/><BlocInput
				etiqueta="Població"
				tipus="text"
				nom="Poblacio"
				referencia={poblacioRef}
				requerit={false}

			/><BlocInput
				etiqueta="Codi Postal"
				tipus="text"
				nom="Codi Postal"
				referencia={codiPostalRef}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Telefon"
				tipus="tel"
				nom="telefon"
				referencia={telefonRef}
				requerit={false}
			/>

			<div className="avis">
				{missatge && <span>{missatge}</span>}
				{error && <span>{error}</span>}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Crear usuari
			</Boto>
		</Formulari>
	);
};

export default FormulariSignup;
