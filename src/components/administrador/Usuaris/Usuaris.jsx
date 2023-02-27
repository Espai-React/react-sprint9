import { Link, Outlet, useOutletContext } from "react-router-dom";
import { Subtitol } from "../../../styles/common/Subtitol.styles";
import { ContenidorGestio } from "../../../styles/common/ContenidorGestio.styles";
import Boto from "../../common/Boto";

const Usuaris = () => {
	const handleMostrar = useOutletContext();

	return (
		<ContenidorGestio>
			<div className="capçalera">
				<Subtitol>Gestió usuaris</Subtitol>
			</div>
			<div className="bloc-botons">
				<Link to="usuarialta">
					<Boto>Alta usuari</Boto>
				</Link>
				<Link to="modificacio" onClick={(e) => e.preventDefault()}>
					<Boto>Moficació usuari</Boto>
				</Link>
				<Link to="consulta" onClick={(e) => e.preventDefault()}>
					<Boto>Consulta usuari</Boto>
				</Link>
				<Link to="baixa" onClick={(e) => e.preventDefault()}>
					<Boto>Baixa usuari</Boto>
				</Link>
			</div>
			<div className="boto-peu">
				<Link to="/admin">
					<Boto onClick={handleMostrar}>Tornar enrere</Boto>
				</Link>
			</div>
			<Outlet/>
		</ContenidorGestio>
	);
};

export default Usuaris;
