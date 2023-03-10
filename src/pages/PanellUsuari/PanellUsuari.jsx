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
import { useState } from "react";

const PanellUsuari = () => {
	const [arrayLlista, setArrayLlista] = useState([]);
	const {
		correuElectronic,
		usuariLoguejat,
		authID,
		administrador,
		nom,
		cognom,
		telefon
	} = useAppContext();
	const navega = useNavigate();
	console.log(usuariLoguejat, authID, administrador, nom, cognom);

	const { handleLogout } = useFormulariAutenticacio();
	const { enviarCorreu } = usePanellUsuari();

	const handleMail = () =>
		enviarCorreu(correuElectronic, nom, cognom, arrayLlista);
	const handleWhatsapp = () =>
		enviarWhatsapp(telefon, correuElectronic, nom, cognom, arrayLlista);

	return (
		<ContenidorPage>
			<ContenidorPanell>
				<div className="capçalera">
					<Titol>Panell Usuari</Titol>
					<Subtitol>{`${nom} ${cognom} (${correuElectronic})`}</Subtitol>
				</div>
				<LlistaUsuari setArrayLlista={setArrayLlista} />
				<div className="bloc-botons">
					<Link onClick={handleMail}>
						<Boto>Enviar selecció per correu</Boto>
					</Link>

					<Link to="https://api.whatsapp.com/send?phone=34609526387&text=Hola">
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
