import React from "react";
import { useFormulari } from "../../lib/hooks/useFormulari";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import Boto from "../../components/common/Boto";
import { Link } from "react-router-dom";

function PanellUsuari() {
	const { handleLogout } = useFormulari();

	return (
		<ContenidorPage>
			<Titol>Panell Usuari</Titol>
			<Link to="perfilusuari">
				<Boto>Dades perfil Usuari</Boto>
			</Link>
			<Link to="canvisusuari">
				<Boto>Canviar usuari i contrasenya</Boto>
			</Link>
			<Boto onClick={handleLogout}>Abandonar la sessió</Boto>
		</ContenidorPage>
	);
}

export default PanellUsuari;
