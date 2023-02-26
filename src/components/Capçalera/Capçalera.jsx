import { Contenidor } from "./Capçalera.styles";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { useAppContext } from "../../context/AppContext";

const Capçalera = () => {
	const { usuariloguejat, administrador } = useAppContext();
	return (
	<Contenidor>
		<h1>Envivo</h1>
		<Link to={(usuariloguejat ===null) ? "/" : (!administrador)? "/usuari" : "/administrador"}>			
			<RiHome2Line />
		</Link>
	</Contenidor>
);
		}

export default Capçalera;
