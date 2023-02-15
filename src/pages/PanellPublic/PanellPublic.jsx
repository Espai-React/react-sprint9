import React from "react";
import { Link } from "react-router-dom";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import Boto from "../../components/common/Boto";
import { Titol } from "../../styles/common/Titol.styles"
function PanellPublic() {
	return (
		<ContenidorPage>
			<Titol>Benvinguda</Titol>
			<Link to="login">
				<Boto>Autenticació</Boto>
			</Link>
		</ContenidorPage>
	);
}

export default PanellPublic;
