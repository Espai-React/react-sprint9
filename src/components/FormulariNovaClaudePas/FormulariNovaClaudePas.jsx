import { useRef } from "react";
import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { Formulari } from "../../styles/common/Formulari.styles";
import BlocInput from "../common/BlocInput/BlocInput";
import Boto from "../common/Boto";

const FormulariNovaClaudePas = () => {
	const correuElectronicRef = useRef();

	const { error, processant, missatge, handleSubmitNovaClaudePas } =
		useFormulariAutenticacio(correuElectronicRef);

	return (
		<Formulari id="novaClaudePas" onSubmit={handleSubmitNovaClaudePas}>
			<BlocInput
				etiqueta="Correu electrònic"
				tipus="email"
				nom="correuElectrónic"
				referencia={correuElectronicRef}
				requerit={true}
			/>
			<div className="avis">
				{error ? <span>{error}</span> : <span>{missatge}</span>}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Crear nova conatrasenya
			</Boto>
		</Formulari>
	);
};

export default FormulariNovaClaudePas;
