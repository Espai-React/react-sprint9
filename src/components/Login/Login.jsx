
import { Titol } from "../../styles/common/Titol.styles";
import { ContenidorForm } from "../../styles/common/ContenidorForm.styles";
import { Link } from "react-router-dom";
import FormulariLogin from "../FormulariLogin";

const Login = () => (
	<ContenidorForm>
		<Titol>Nova sessió d'usuari</Titol>
		<FormulariLogin />
		<div>
			Vols crear un compte? <Link to="/signup">Crear compte nou</Link>
		</div>
	</ContenidorForm>
);

export default Login;
