import { useFormulariAutenticacio } from "../../lib/hooks/useFormulariAutenticacio";
import { ContenidorPage } from "../../styles/common/ContenidorPage.styles";
import { Titol } from "../../styles/common/Titol.styles";
import Boto from "../../components/common/Boto";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { ContenidorPanell } from "./PanellAdmin.styles";
import { useState } from "react";
import { Subtitol } from '../../styles/common/Subtitol.styles';

const PanellAdmin = () => {
	const [mostrarBotons, setMostrarBotons] = useState(true);

	const handleMostrar = (e) => 
		setMostrarBotons(!mostrarBotons)

	const { usuariLoguejat, authID, administrador, nom, cognom } =
		useAppContext();
	const navega = useNavigate();
	console.log(usuariLoguejat, authID, administrador, nom, cognom);

	const { handleLogout } = useFormulariAutenticacio();

	return (
		<ContenidorPage>
			<ContenidorPanell>
				<div className="capçalera">
					<Titol>Panell Administrador</Titol>
					<h3>{usuariLoguejat}</h3>
				</div>
				{mostrarBotons && (
					<>
						<Subtitol className="subtitol">Opcions de gestió</Subtitol>
						<div className="bloc-botons-admin">
							<Link to="usuaris">
								<Boto onClick={handleMostrar}>Usuaris</Boto>
							</Link>
							<Link to="artistes">
								<Boto onClick={handleMostrar}>Artistes</Boto>
							</Link>
							<Link to="espais">
								<Boto onClick={handleMostrar}>Espais</Boto>
							</Link>
							<Link to="esdeveniments">
								<Boto onClick={handleMostrar}>Esdeveniments</Boto>
							</Link>
						</div>
					</>
				)}
				<Outlet context={handleMostrar} />
				{mostrarBotons && (
					<div className="boto-peu">
						<Boto onClick={() => handleLogout(usuariLoguejat, navega)}>
							Abandonar la sessió
						</Boto>
					</div>
				)}
			</ContenidorPanell>
		</ContenidorPage>
	);
}

export default PanellAdmin;
