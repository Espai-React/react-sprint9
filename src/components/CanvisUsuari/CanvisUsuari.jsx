import { Titol } from "../../styles/common/Titol.styles";
import { ContenidorForm } from "../../styles/common/ContenidorForm.styles";
import { Link } from "react-router-dom";
import FormulariCanvisUsuari from "../FormulariCanvisUsuari";

const CanvisUsuari = () => (
	<ContenidorForm>
		<Titol>Actualitzar Perfil</Titol>
		<FormulariCanvisUsuari />
		<div>
			No vols conservar els canvis?
			<Link to="/panellusuari">Cancel·lar canvis</Link>
		</div>
	</ContenidorForm>
);

export default CanvisUsuari;
