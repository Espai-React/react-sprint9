import { ContenidorForm } from "../../../styles/common/ContenidorForm.styles";
import FormulariAltaUsuari from "../FormulariAltaUsuari";
import { Subtitol } from '../../../styles/common/Subtitol.styles';

const AltaUsuari = () => (
	<ContenidorForm>
		<div className="capçalera">
			<Subtitol>Alta usuari administració</Subtitol>
		</div>
		<FormulariAltaUsuari />
	</ContenidorForm>
);

export default AltaUsuari;
