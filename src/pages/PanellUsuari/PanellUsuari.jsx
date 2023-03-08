import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import { Subtitol } from "../../styles/common/Subtitol.styles";
import Boto from "../../components/common/Boto";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { ContenidorPanell } from "./PanellUsuari.styles";
import LlistaUsuari from "../../components/usuari/LlistaUsuari";
import { usePanellUsuari } from "../../lib/hooks/usePanellUsuari";
import { useRef } from "react";

const PanellUsuari = () => {
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
	const { enviarCorreu } = usePanellUsuari();

	const handleMail = () =>
		enviarCorreu(correuElectronic, nom, cognom);

	return (
		<ContenidorPage>
			<ContenidorPanell>
				<div className="capçalera">
					<Titol>Panell Usuari</Titol>
					<Subtitol>{`${nom} ${cognom} (${correuElectronic})`}</Subtitol>
				</div>
				<LlistaUsuari/>
				<div className="bloc-botons">
					<Link onClick={handleMail}>
						<Boto>Enviar selecció per correu</Boto>
					</Link>
					<Link to="enviarwhatsapp" onClick={(e) => e.preventDefault()}>
						<Boto>Enviar selecció per whatsapp</Boto>
					</Link>
					<Link to="actualitzarusuari">
						<Boto>Canviar detalls usuari</Boto>
					</Link>
					<Link to="actualitzarperfil">
						<Boto>Canviar correu i contrasenya</Boto>
					</Link>
				</div>
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
