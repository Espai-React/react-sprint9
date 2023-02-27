import { ContenidorForm } from "../../../styles/common/ContenidorForm.styles";
import { Titol } from "../../../styles/common/Titol.styles"
import FormulariNovaClaudePas from '../FormulariNovaClaudePas/index';
import {Link} from 'react-router-dom';

const ClaudePasOblidada = () => (
	<ContenidorForm>
		<Titol>Crear nova constrasenya</Titol>
		<FormulariNovaClaudePas />
		<div className="peu">
			<Link to="/login">Tornar a nova sessió</Link>
		</div>
	</ContenidorForm>
);

export default ClaudePasOblidada;
