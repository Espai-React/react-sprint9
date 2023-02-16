import { Route, Routes } from "react-router-dom";
import PanellPublic from "../pages/PanellPublic";
import Signup from "../components/Singup";
import Login from "../components/Login";
import PanellUsuari from "../pages/PanellUsuari";
import Public from "./Public";
import Usuari from "./Usuari";
import ClaudePasOblidada from "../components/ClaudePasOblidada";
import DetallsUsuari from "../components/DetallsUsuari";
import CanvisUsuari from '../components/CanvisUsuari/index';

const Router = () => {
	return (
		<Routes>
			<Route path="" element={<Public />}>
				<Route index element={<PanellPublic />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
				<Route path="claudepasoblidada" element={<ClaudePasOblidada />} />
			</Route>
			<Route path="panellusuari" element={<Usuari />}>
				<Route index element={<PanellUsuari />} />
				<Route path="detallsusuari" element={<DetallsUsuari />} />
				<Route path="canvisusuari" element={<CanvisUsuari />} />
			</Route>
		</Routes>
	);
};

export default Router;
