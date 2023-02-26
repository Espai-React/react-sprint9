import { useRef } from "react";
import { Formulari } from "../../styles/common/Formulari.styles";
import BlocInput from "../common/BlocInput";
import Boto from "../common/Boto";
import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { useAppContext } from "../../context/AppContext";

const FormulariActualitzarPerfil = () => {
	const { usuariLoguejat } = useAppContext();
	const nouCorreuElectronicRef = useRef();
	const novaClaudePasRef = useRef();
	const novaClaudePasConfirmacioRef = useRef();

	const { error, missatge, processant, handleSubmitUpdateProfile } =
		useFormulariAutenticacio(
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
				placeholder={usuariLoguejat}
			/>

			<BlocInput
				etiqueta="Nova contrasenya"
				tipus="password"
				nom="claudePas"
				referencia={novaClaudePasRef}
				requerit={false}
				placeholder="Deixa-ho en blanc si no vols fer canvis..."
			/>

			<BlocInput
				etiqueta="Confirmació nova contrasenya"
				tipus="password"
				nom="claudePasConfirmacio"
				referencia={novaClaudePasConfirmacioRef}
				requerit={false}
				placeholder="Deixa-ho en blanc si no vols fer canvis..."
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

export default FormulariActualitzarPerfil;
