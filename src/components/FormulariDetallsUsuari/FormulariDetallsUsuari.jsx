import { useRef } from "react";
import { Formulari } from "../../styles/common/Formulari.styles";
import BlocInput from "../common/BlocInput";
import Boto from "../common/Boto";
import { useFormulariUsuari } from "../../lib/hooks/useFormulariUsuari";
import { useAppContext } from "../../context/AppContext";

const FormulariDetallsUsuari = () => {
	const { usuariLoguejat } = useAppContext();
	const nomRef = useRef();
	const cognomRef = useRef();
	const telefonRef = useRef();

	const { error, processant, handleSubmitDetailsUsuari } = useFormulariUsuari(
		nomRef,
		cognomRef,
		telefonRef
	);

	return (
		<Formulari id="dadesUsuari" onSubmit={handleSubmitDetailsUsuari}>
			<BlocInput
				etiqueta="Correu electrònic"
				tipus="email"
				nom="correuElectronic"
				defaultValue={usuariLoguejat}
				nomesLectura={true}
			/>
			<BlocInput
				etiqueta="Nom"
				tipus="text"
				nom="nom"
				referencia={nomRef}
				requerit={false}
				placeholder="introdueix el teu nom..."
			/>

			<BlocInput
				etiqueta="Cognom"
				tipus="text"
				nom="cognom"
				referencia={cognomRef}
				requerit={false}
				placeholder="introdueix el teu cognom..."
			/>

			<BlocInput
				etiqueta="Número de telèfon"
				tipus="tel"
				nom="telèfon"
				referencia={telefonRef}
				requerit={false}
				placeholder="introdueix el teu número de telèfon..."
			/>

			<div className="error">{error && <span>{error}</span>}</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Aplicar canvis
			</Boto>
		</Formulari>
	);
};

export default FormulariDetallsUsuari;
