import { Link, useOutletContext } from "react-router-dom";
import { Subtitol } from "../../../styles/common/Subtitol.styles";
import { ContenidorGestio } from "../../../styles/common/ContenidorGestio.styles";
import Boto from "../../common/Boto";

const Espais = () => {
	const handleMostrar = useOutletContext();

	return (
		<ContenidorGestio>
			<div className="capçalera">
				<Subtitol>Gestió espais</Subtitol>
			</div>
			<div className="bloc-botons">
				<Link to="alta">
					<Boto>Alta espai</Boto>
				</Link>
				<Link to="modificacio" onClick={(e) => e.preventDefault()}>
					<Boto>Moficació espai</Boto>
				</Link>
				<Link to="consulta" onClick={(e) => e.preventDefault()}>
					<Boto>Consulta espai</Boto>
				</Link>
				<Link to="baixa" onClick={(e) => e.preventDefault()}>
					<Boto>Baixa espai</Boto>
				</Link>
			</div>
			<div className="boto-peu">
				<Link to="/admin">
					<Boto onClick={handleMostrar}>Tornar enrere</Boto>
				</Link>
			</div>
		</ContenidorGestio>
	);
};

export default Espais;
