import { ContenidorForm } from "../../../styles/common/ContenidorForm.styles";
import FormulariSignUpAdmin from '../FormulariSignupAdmin';
import { Subtitol } from '../../../styles/common/Subtitol.styles';

const UsuariAlta = () => (
	<ContenidorForm>
		<div className="capçalera">
			<Subtitol>Alta usuari administració</Subtitol>
		</div>
		<FormulariSignUpAdmin />
	</ContenidorForm>
);

export default UsuariAlta;
