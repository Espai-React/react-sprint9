import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import Boto from "../../components/common/Boto";
import { Link } from "react-router-dom";
import { useFormulariUsuari } from "../../lib/hooks/useFormulariUsuari";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

function PanellUsuari() {
	/* const { usuariLoguejat, uid, administrador } = useAppContext();
	const { handleCreateUser } = useFormulariUsuari(
		usuariLoguejat,
		uid,
		administrador
	);
	console.log(usuariLoguejat, uid, administrador); */
	const { handleLogout } = useFormulariAutenticacio();
/* 
	useEffect(() => {
		handleCreateUser();
	}, [usuariLoguejat]); */

	return (
		<ContenidorPage>
			<Titol>Panell Usuari</Titol>
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
