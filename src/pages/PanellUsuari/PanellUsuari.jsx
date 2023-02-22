import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import Boto from "../../components/common/Boto";
import { Link } from "react-router-dom";
import { useFormulariUsuari } from "../../lib/hooks/useFormulariUsuari";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

function PanellUsuari() {
	const { usuariLoguejat, authID, administrador } = useAppContext();
	console.log(usuariLoguejat, authID, administrador);

	const { dadesUsuari, setDadesUsuari, handleCreateUser } = useFormulariUsuari(
		usuariLoguejat,
		authID,
		administrador
	);

	const { handleLogout } = useFormulariAutenticacio();

	return (
		<ContenidorPage>
			<Titol>
				Panell Usuari {dadesUsuari.authID}
				{dadesUsuari.nom}
			</Titol>
			<Link to="detallsusuari">
				<Boto>Detalls Usuari</Boto>
			</Link>
			<Link to="canvisusuari">
				<Boto>Canviar correu i contrasenya</Boto>
			</Link>
			<Boto onClick={handleLogout}>Abandonar la sessió</Boto>
		</ContenidorPage>
	);
}

export default PanellUsuari;
