import { useRef } from "react";
import { useFormulariAutenticacio } from "../../../lib/hooks/useFormulariAutenticacio";
import { Formulari } from "../../../styles/common/Formulari.styles";
import BlocInput from "../../common/BlocInput/BlocInput";
import Boto from "../../common/Boto";

const FormulariNovaClaudePas = () => {
	const correuElectronicRef = useRef();

	const { error, processant, missatge, handleSubmitNovaClaudePas } =
		useFormulariAutenticacio();
	const handleSubmit = (e) => handleSubmitNovaClaudePas(e, correuElectronicRef);

	return (
		<Formulari id="novaClaudePas" onSubmit={handleSubmit}>
			<BlocInput
				etiqueta="Correu electrònic"
				tipus="email"
				nom="correuElectrónic"
				referencia={correuElectronicRef}
				requerit={true}
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
				Crear nova conatrasenya
			</Boto>
		</Formulari>
	);
};

export default FormulariNovaClaudePas;
