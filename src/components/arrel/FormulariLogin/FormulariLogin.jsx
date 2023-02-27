import { useRef } from "react";
import { Formulari } from "../../../styles/common/Formulari.styles";
import { Link, useNavigate } from "react-router-dom";
import BlocInput from "../../common/BlocInput";
import Boto from "../../common/Boto";
import { useFormulariAutenticacio } from "../../../lib/hooks/useFormulariAutenticacio";
import { logosLogin } from "../../../lib/constants/logosLogin";
import { BotoLogo } from "../../../styles/common/BotoLogo.styles";
import { useAppContext } from "../../../context/AppContext";

const FormulariLogin = () => {
	const correuElectronicRef = useRef();
	const claudePasRef = useRef();

	const { error, missatge, processant, handleSubmitLogin, handleSubmitGoogle } =
		useFormulariAutenticacio();
	const { usuariLoguejat } = useAppContext();
	const navega = useNavigate();
	const handleSubmit = (e) =>
		handleSubmitLogin(
			e,
			correuElectronicRef,
			claudePasRef,
			usuariLoguejat,
			navega
		);
	const logoGoogle = logosLogin.logoGoogle;

	return (
		<Formulari id="login" onSubmit={handleSubmit}>
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
			<div className="avis">
				{missatge && <span>{missatge}</span>}
				{error && <span>{error}</span>}
				<Link to="/claudepasoblidada">No recordes la contrasenya?</Link>
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Iniciar sessió
			</Boto>
			<BotoLogo
				tipus="button"
				onClick={() => {
					handleSubmitGoogle(usuariLoguejat, navega);
				}}
				deshabilitat={processant}>
				<img src={logoGoogle} />
				Iniciar sessió amb Google
			</BotoLogo>
		</Formulari>
	);
};

export default FormulariLogin;
