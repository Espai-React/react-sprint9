import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import Boto from "../../components/common/Boto";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { ContenidorPanell } from "./PanellUsuari.styles";
import LlistaUsuari from "../../components/usuari/LlistaUsuari";

function PanellUsuari() {
	const {
		correuElectronic,
		usuariLoguejat,
		authID,
		administrador,
		nom,
		cognom,
	} = useAppContext();
	const navega = useNavigate();
	console.log(usuariLoguejat, authID, administrador, nom, cognom);

	const { handleLogout } = useFormulariAutenticacio();

	return (
		<ContenidorPage>
			<ContenidorPanell>
				<div className="capçalera">
					<Titol>Panell Usuari</Titol>
					<h3>{correuElectronic}</h3>
				</div>
				<div className="bloc-botons">
					<Link to="actualitzarusuari">
						<Boto>Canviar Detalls Usuari</Boto>
					</Link>
					<Link to="actualitzarperfil">
						<Boto>Canviar correu i contrasenya</Boto>
					</Link>
				</div>
				<LlistaUsuari/>
				<div className="boto-peu">
					<Boto onClick={() => handleLogout(usuariLoguejat, navega)}>
						Abandonar la sessió
					</Boto>
				</div>
			</ContenidorPanell>
		</ContenidorPage>
	);
}

export default PanellUsuari;
