import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import Boto from "../../components/common/Boto";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { Contenidor } from "./PanellUsuari.styles";

function PanellUsuari() {
	const { usuariLoguejat, authID, administrador, nom, cognom } =
		useAppContext();
	console.log(usuariLoguejat, authID, administrador, nom, cognom);

	const { handleLogout } = useFormulariAutenticacio();

	return (
		<ContenidorPage>
			<Contenidor>
				<div className="capçalera">
					<Titol>Panell Usuari</Titol>
					<h3>{usuariLoguejat}</h3>
				</div>
				<div className="bloc-botons">
					<Link to="actualitzarusuari">
						<Boto>Canviar Detalls Usuari</Boto>
					</Link>
					<Link to="actualitzarperfil">
						<Boto>Canviar correu i contrasenya</Boto>
					</Link>
					<Boto onClick={handleLogout}>Abandonar la sessió</Boto>
				</div>
			</Contenidor>
		</ContenidorPage>
	);
}

export default PanellUsuari;
