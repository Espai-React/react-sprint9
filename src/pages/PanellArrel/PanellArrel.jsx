import React from "react";
import { Link } from "react-router-dom";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import Boto from "../../components/common/Boto";
import { Titol } from "../../styles/common/Titol.styles";
import { ContenidorPanell } from "./PanellArrel.styles";

const PanellArrel = () => {
	return (
		<ContenidorPage>
			<ContenidorPanell>
				<div className="capçalera">
					<Titol>Benvinguda</Titol>
				</div>
				<div className="bloc-botons">
					<Link to="login">
						<Boto>Nova sessió</Boto>
					</Link>
					<Link to="signup">
						<Boto>Crear usuari</Boto>
					</Link>
				</div>
			</ContenidorPanell>
		</ContenidorPage>
	);
}

export default PanellArrel;
