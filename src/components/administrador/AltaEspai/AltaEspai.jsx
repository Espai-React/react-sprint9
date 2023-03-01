import { ContenidorForm } from "../../../styles/common/ContenidorForm.styles";
import FormulariAltaEspai from "../FormulariAltaEspai";
import { Subtitol } from '../../../styles/common/Subtitol.styles';

const AltaEspai = () => (
	<ContenidorForm>
		<div className="capçalera">
			<Subtitol>Alta espai administració</Subtitol>
		</div>
		<FormulariAltaEspai />
	</ContenidorForm>
);

export default AltaEspai;
