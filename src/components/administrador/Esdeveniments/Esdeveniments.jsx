import { Link, useOutletContext } from "react-router-dom";
import { Subtitol } from "../../../styles/common/Subtitol.styles";
import { ContenidorGestio } from "../../../styles/common/ContenidorGestio.styles";
import Boto from "../../common/Boto";

const Esdeveniments = () => {
	const handleMostrar = useOutletContext();

	return (
		<ContenidorGestio>
			<div className="capçalera">
				<Subtitol>Gestió esdeveniments</Subtitol>
			</div>
			<div className="bloc-botons">
				<Link to="alta">
					<Boto>Alta esdeveniments</Boto>
				</Link>
				<Link to="modificacio" onClick={(e) => e.preventDefault()}>
					<Boto>Moficació esdeveniments</Boto>
				</Link>
				<Link to="consulta" onClick={(e) => e.preventDefault()}>
					<Boto>Consulta esdeveniments</Boto>
				</Link>
				<Link to="baixa" onClick={(e) => e.preventDefault()}>
					<Boto>Baixa esdeveniments</Boto>
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

export default Esdeveniments;
