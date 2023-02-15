import { useRef } from "react";
import { useFormulari } from "../../lib/hooks/useFormulari";
import { Formulari } from "../../styles/common/Formulari.styles";
import BlocInput from "../common/BlocInput/BlocInput";
import Boto from "../common/Boto";

const FormulariNovaClaudePas = () => {
	const correuElectronicRef = useRef();

	const { error, processant, missatge, handleSubmitNovaClaudePas } =
		useFormulari(correuElectronicRef);

	return (
		<Formulari id="novaClaudePas" onSubmit={handleSubmitNovaClaudePas}>
			<BlocInput
				etiqueta="Correu electrònic"
				tipus="email"
				nom="correuElectrónic"
				referencia={correuElectronicRef}
				requerit={true}
			/>
			<div className="error">
				{error ? <span>{error}</span> : <span>{missatge}</span>}
			</div>
			<Boto
				tipus="submit"
				text="Crear nova conatrasenya"
				deshabilitat={processant}
			/>
		</Formulari>
	);
};

export default FormulariNovaClaudePas;
