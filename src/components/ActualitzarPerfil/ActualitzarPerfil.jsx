import { Titol } from "../../styles/common/Titol.styles";
import { ContenidorForm } from "../../styles/common/ContenidorForm.styles";
import { Link } from "react-router-dom";
import FormulariActualitzarPerfil from "../FormulariActualitzarPerfil";
import { useAppContext } from "../../context/AppContext";

const ActualitzarPerfil = () => {
	const { usuariLoguejat } = useAppContext();
	return (
		<ContenidorForm>
			<div className="capçalera">
				<Titol>Actualitzar perfil</Titol>
				<h3>{usuariLoguejat}</h3>
			</div>
			<FormulariActualitzarPerfil />
			<div className="peu">
				No vols conservar els canvis?
				<Link to="/usuari">Cancel·lar canvis</Link>
			</div>
		</ContenidorForm>
	);
};
export default ActualitzarPerfil;
