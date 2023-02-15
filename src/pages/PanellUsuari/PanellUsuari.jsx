import React from "react";
import { useFormulari } from "../../lib/hooks/useFormulari";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import Boto from "../../components/common/Boto";
import { Link } from "react-router-dom";
import { useAutenticacioContext } from "../../context/AutenticacioContext";

function PanellUsuari() {
	const { usuariLoguejat } = useAutenticacioContext();
	const { handleLogout } = useFormulari();

	return (
		<ContenidorPage>
			<Titol>Panell Usuari</Titol>
			<Link to="perfilusuari">
				<Boto text={"Perfil Usuari"}></Boto>
			</Link>
			<Boto onClick={handleLogout}>Log out</Boto>
		</ContenidorPage>
	);
}

export default PanellUsuari;
