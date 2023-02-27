import { Titol } from "../../../styles/common/Titol.styles";
import { ContenidorForm } from "../../../styles/common/ContenidorForm.styles";
import { Link } from "react-router-dom";
import FormulariActualitzarUsuari from "../FormulariActualitzarUsuari";
import { useAppContext } from "../../../context/AppContext";

const ActualitzarUsuari = () => {
	const { usuariLoguejat } = useAppContext();
	
	return (
		<ContenidorForm>
			<div className="capçalera">
				<Titol>Actualitzar Usuari</Titol>
				<h3>{usuariLoguejat}</h3>
			</div>
			<FormulariActualitzarUsuari />
			<div className="peu">
				No vols conservar els canvis?
				<Link to="/usuari">Cancel·lar canvis</Link>
			</div>
		</ContenidorForm>
	);
};

export default ActualitzarUsuari;
