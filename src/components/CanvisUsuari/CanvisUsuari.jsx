import { Titol } from "../../styles/common/Titol.styles";
import { ContenidorForm } from "../../styles/common/ContenidorForm.styles";
import { Link } from "react-router-dom";
import FormulariPerfil from '../FormulariPerfil';

const CanvisUsuari = () => (
	<ContenidorForm>
		<Titol>Actualitzar Perfil</Titol>
		<FormulariPerfil />
		<div>
			No vols conservar els canvis?
			<Link to="/panellusuari">Cancel·lar canvis</Link>
		</div>
	</ContenidorForm>
);

export default CanvisUsuari;
