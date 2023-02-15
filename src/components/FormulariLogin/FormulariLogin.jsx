import { useRef } from "react";
import { Formulari } from "../../styles/common/Formulari.styles";
import { Link } from "react-router-dom";
import BlocInput from "../common/BlocInput";
import Boto from "../common/Boto";
import { useFormulari } from "../../lib/hooks/useFormulari";
import { logosLogin } from "../../lib/constants/logosLogin";
import { BotoLogo } from "../../styles/common/BotoLogo.styles";

const FormulariLogin = () => {
	const correuElectronicRef = useRef();
	const claudePasRef = useRef();

	const { error, processant, handleSubmitLogin, handleSubmitGoogle } =
		useFormulari(correuElectronicRef, claudePasRef);

	const logoGoogle = logosLogin.logoGoogle;

	return (
		<Formulari id="login" onSubmit={handleSubmitLogin}>
			<BlocInput
				etiqueta="Correu electrònic"
				tipus="email"
				nom="correuElectronic"
				referencia={correuElectronicRef}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Contrasenya"
				tipus="password"
				nom="claudePas"
				referencia={claudePasRef}
				requerit={true}
			/>
			<div className="error">
				{error ? (
					<span>{error}</span>
				) : (
					<Link to="/novaClaudePas">No recordes la contrasenya?</Link>
				)}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
			Iniciar sessió</Boto>
			<BotoLogo
				tipus="button"
				onClick={handleSubmitGoogle}
				deshabilitat={processant}>
				<img src={logoGoogle} />
				Iniciar sessió amb Google
			</BotoLogo>
		</Formulari>
	);
};

export default FormulariLogin;
