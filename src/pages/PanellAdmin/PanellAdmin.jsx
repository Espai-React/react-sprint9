import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import Boto from "../../components/common/Boto";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { Contenidor } from "./PanellAdmin.styles";

function PanellAdmin() {
	const { usuariLoguejat, authID, administrador, nom, cognom } =
		useAppContext();
	console.log(usuariLoguejat, authID, administrador, nom, cognom);

	const { handleLogout } = useFormulariAutenticacio();

	return (
		<ContenidorPage>
			<Contenidor>
				<div className="capçalera">
					<Titol>Panell Administrador</Titol>
					<h3>{usuariLoguejat}</h3>
				</div>
				<div className="bloc-botons">
					<Link to="detallsusuari">
						<Boto>Detalls Usuari</Boto>
					</Link>
					<Link to="canvisusuari">
						<Boto>Canviar correu i contrasenya</Boto>
					</Link>
					<Boto onClick={handleLogout}>Abandonar la sessió</Boto>
				</div>
			</Contenidor>
		</ContenidorPage>
	);
}

export default PanellAdmin;
