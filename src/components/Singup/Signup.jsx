import { ContenidorForm } from "../../styles/common/ContenidorForm.styles";
import FormulariSignUp from "../FormulariSignup";
import { Link } from "react-router-dom";

const Signup = () => (
	<ContenidorForm>
		<h2>Crear nou compte d'usuari</h2>
		<FormulariSignUp />
		<div>
			Ja tens un compte? <Link to="/login">Nova sessió</Link>
		</div>
	</ContenidorForm>
);

export default Signup;
