import { ContenidorForm } from "../../../styles/common/ContenidorForm.styles";
import FormulariAltaArtista from "../FormulariAltaArtista";
import { Subtitol } from '../../../styles/common/Subtitol.styles';

const AltaArtista = () => (
	<ContenidorForm>
		<div className="capçalera">
			<Subtitol>Alta artista administració</Subtitol>
		</div>
		<FormulariAltaArtista />
	</ContenidorForm>
);

export default AltaArtista;
