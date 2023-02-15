import { ContenidorForm } from "../../styles/common/ContenidorForm.styles";
import { Titol } from "../../styles/common/Titol.styles"
import FormulariNovaClaudePas from '../FormulariNovaClaudePas/index';
import {Link} from 'react-router-dom';

const NovaClaudePas = () => (
	<ContenidorForm>
		<Titol>Crear nova constrasenya</Titol>
		<FormulariNovaClaudePas />
		<div>
			<Link to="/login">Tornar a nova sessió</Link>
		</div>
	</ContenidorForm>
);

export default NovaClaudePas;
