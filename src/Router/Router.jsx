import { Route, Routes } from "react-router-dom";
import PanellPublic from "../pages/PanellPublic";
import Signup from "../components/Singup";
import Login from "../components/Login";
import PanellUsuari from "../pages/PanellUsuari";
import Public from "./Public";
import Usuari from "./Usuari";
import NovaClaudePas from '../components/NovaClaudePas';
import PerfilUsuari from "../components/PerfilUsuari";

const Router = () => {
	return (
		<Routes>
			<Route path="" element={<Public />}>
				<Route index element={<PanellPublic />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="novaclaudepas" element={<NovaClaudePas />} />
			</Route>
			<Route path="panellusuari" element={<Usuari />}>
				<Route index element={<PanellUsuari />} />
				<Route path="perfilusuari" element={<PerfilUsuari />} />
				<Route path="canvisusuari" element={<PerfilUsuari />} />
			</Route>
		</Routes>
	);
};

export default Router;
