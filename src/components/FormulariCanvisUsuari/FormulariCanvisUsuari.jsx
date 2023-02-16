import { useRef } from "react";
import { Formulari } from "../../styles/common/Formulari.styles";
import BlocInput from "../common/BlocInput";
import Boto from "../common/Boto";
import { useFormulari } from "../../lib/hooks/useFormulari";
import { useAutenticacioContext } from "../../context/AutenticacioContext";

const FormulariCanvisUsuari = () => {
	const { usuariLoguejat } = useAutenticacioContext();
	const nouCorreuElectronicRef = useRef();
	const novaClaudePasRef = useRef();
	const novaClaudePasConfirmacioRef = useRef();

	const { error, processant, handleSubmitUpdateProfile } = useFormulari(
		nouCorreuElectronicRef,
		novaClaudePasRef,
		novaClaudePasConfirmacioRef
	);

	return (
		<Formulari id="signup" onSubmit={handleSubmitUpdateProfile}>
			<BlocInput
				etiqueta="Nou correu electrònic"
				tipus="email"
				nom="correuElectronic"
				referencia={nouCorreuElectronicRef}
				requerit={true}
				defaultValue={usuariLoguejat}
			/>

			<BlocInput
				etiqueta="Nova contrasenya"
				tipus="password"
				nom="claudePas"
				referencia={novaClaudePasRef}
				requerit={false}
				placeholder="deixa-ho en blanc si no vols fer canvis..."
			/>

			<BlocInput
				etiqueta="Confirmació nova contrasenya"
				tipus="password"
				nom="claudePasConfirmacio"
				referencia={novaClaudePasConfirmacioRef}
				requerit={false}
				placeholder="deixa-ho en blanc si no vols fer canvis..."
			/>

			<div className="error">{error && <span>{error}</span>}</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Aplicar canvis
			</Boto>
		</Formulari>
	);
};

export default FormulariCanvisUsuari;
