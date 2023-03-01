import {Link, useOutletContext, Outlet} from 'react-router-dom';
import { Subtitol } from "../../../styles/common/Subtitol.styles";
import { ContenidorGestio } from "../../../styles/common/ContenidorGestio.styles";
import Boto from "../../common/Boto";

const Artistes = () => {
	const handleMostrar = useOutletContext();

	return (
		<ContenidorGestio>
			<div className="capçalera">
				<Subtitol>Gestió d'artistes</Subtitol>
			</div>
			<div className="bloc-botons">
				<Link to="altaartista">
					<Boto>Alta artista</Boto>
				</Link>
				<Link to="modificacio" onClick={(e) => e.preventDefault()}>
					<Boto>Moficació artista</Boto>
				</Link>
				<Link to="consulta" onClick={(e) => e.preventDefault()}>
					<Boto>Consulta artista</Boto>
				</Link>
				<Link to="baixa" onClick={(e) => e.preventDefault()}>
					<Boto>Baixa artista</Boto>
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

export default Artistes;
