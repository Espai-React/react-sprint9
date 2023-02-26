import { ContenidorForm } from "../../styles/common/ContenidorForm.styles";
import FormulariSignUp from "../FormulariSignup";
import { Link } from "react-router-dom";
import { Titol } from "../../styles/common/Titol.styles"

const Signup = () => (
	<ContenidorForm>
		<Titol>Nou compte d'usuari</Titol>
		<FormulariSignUp />
		<div className="peu">
			Ja tens un compte? <Link to="/login">Nova sessió</Link>
		</div>
	</ContenidorForm>
);

export default Signup;
