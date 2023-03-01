import { ContenidorForm } from "../../../styles/common/ContenidorForm.styles";
import FormulariAltaEsdeveniment from "../FormulariAltaEsdeveniment";
import { Subtitol } from '../../../styles/common/Subtitol.styles';

const AltaEsdeveniment = () => (
	<ContenidorForm>
		<div className="capçalera">
			<Subtitol>Alta esdeveniment administració</Subtitol>
		</div>
		<FormulariAltaEsdeveniment />
	</ContenidorForm>
);

export default AltaEsdeveniment;
