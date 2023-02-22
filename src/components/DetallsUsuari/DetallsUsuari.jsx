import { Titol } from "../../styles/common/Titol.styles";
import { ContenidorForm } from "../../styles/common/ContenidorForm.styles";
import { Link } from "react-router-dom";
import FormulariDetallsUsuari from "../FormulariDetallsUsuari";

const DetallsUsuari = () => (
	<ContenidorForm>
		<Titol>Detalls Usuari</Titol>
		<FormulariDetallsUsuari />
		<div>
			No vols conservar els canvis?
			<Link to="/usuari">Cancel·lar canvis</Link>
		</div>
	</ContenidorForm>
);

export default DetallsUsuari;
