import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutArrel from "../layouts/LayoutArrel";
import PanellArrel from "../pages/PanellArrel";
import Login from "../components/arrel/Login";
import Signup from "../components/arrel/Singup";
import ClaudePasOblidada from "../components/arrel/ClaudePasOblidada";
import LayoutAdmin from "../layouts/LayoutAdmin";
import PanellAdmin from "../pages/PanellAdmin/PanellAdmin";
import LayoutUsuari from "../layouts/LayoutUsuari";
import PanellUsuari from "../pages/PanellUsuari";
import ActualitzarUsuari from "../components/arrel/ActualitzarUsuari";
import ActualitzarPerfil from "../components/arrel/ActualitzarPerfil";
import Usuaris from "../components/administrador/Usuaris";
import AltaUsuari from "../components/administrador/AltaUsuari/AltaUsuari";
import Artistes from "../components/administrador/Artistes/index";
import AltaArtista from "../components/administrador/AltaArtista/AltaArtista";
import Espais from "../components/administrador/Espais/index";
import Esdeveniments from "../components/administrador/Esdeveniments/index";
import AltaEspai from "../components/administrador/AltaEspai/index";
import AltaEsdeveniment from "../components/administrador/AltaEsdeveniment/index";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<LayoutArrel />}>
					<Route index element={<PanellArrel />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="claudepasoblidada" element={<ClaudePasOblidada />} />

					<Route path="" element={<LayoutAdmin />}>
						<Route path="admin" element={<PanellAdmin />}>
							<Route path="usuaris" element={<Usuaris />}>
								<Route path="altausuari" element={<AltaUsuari />} />
							</Route>
							<Route path="artistes" element={<Artistes />}>
								<Route path="altaartista" element={<AltaArtista />} />
							</Route>
							<Route path="espais" element={<Espais />}>
								<Route path="altaespai" element={<AltaEspai />} />
							</Route>
							<Route path="esdeveniments" element={<Esdeveniments />}>
								<Route
									path="altaesdeveniment"
									element={<AltaEsdeveniment />}
								/>
							</Route>
						</Route>
					</Route>

					<Route path="usuari" element={<LayoutUsuari />}>
						<Route index element={<PanellUsuari />} />
						<Route path="actualitzarusuari" element={<ActualitzarUsuari />} />
						<Route path="actualitzarperfil" element={<ActualitzarPerfil />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
