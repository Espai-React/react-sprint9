import React from "react";
import { Link } from "react-router-dom";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import Boto from "../../components/common/Boto";
import { Titol } from "../../styles/common/Titol.styles";
import { Contenidor } from "./PanellPublic.styles";

function PanellPublic() {
	return (
		<ContenidorPage>
			<Contenidor>
				<Titol>Benvinguda</Titol>
				<div className="bloc-botons">
					<Link to="login">
						<Boto>Nova sessió</Boto>
					</Link>
					<Link to="signup">
						<Boto>Crear usuari</Boto>
					</Link>
				</div>
			</Contenidor>
		</ContenidorPage>
	);
}

export default PanellPublic;
