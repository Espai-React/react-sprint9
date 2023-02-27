import { useRef } from "react";
import { Formulari } from "../../../styles/common/Formulari.styles";
import BlocInput from "../../common/BlocInput";
import Boto from "../../common/Boto";
import { useFormulariAutenticacio } from "../../../lib/hooks/useFormulariAutenticacio";
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

const FormulariActualitzarPerfil = () => {
	const nouCorreuElectronicRef = useRef();
	const novaClaudePasRef = useRef();
	const novaClaudePasConfirmacioRef = useRef();

	const { error, missatge, processant, handleSubmitUpdateProfile } =
		useFormulariAutenticacio();
	const { usuariLoguejatComplet, usuariLoguejat, authID, dadesUsuari } = useAppContext();
	const navega = useNavigate();
	const handleSubmit = (e) =>
		handleSubmitUpdateProfile(
			e,
			nouCorreuElectronicRef,
			novaClaudePasRef,
			novaClaudePasConfirmacioRef,
			usuariLoguejatComplet,
			usuariLoguejat,
			authID,
			dadesUsuari,
			navega
		);

	return (
		<Formulari id="signup" onSubmit={handleSubmit}>
			<BlocInput
				etiqueta="Nou correu electrònic"
				tipus="email"
				nom="correuElectronic"
				referencia={nouCorreuElectronicRef}
				requerit={false}
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
				{error && <span>{error}</span>}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Aplicar canvis
			</Boto>
		</Formulari>
	);
};

export default FormulariActualitzarPerfil;
