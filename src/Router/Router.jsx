import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutArrel from '../layouts/LayoutArrel';
import PanellPublic from "../pages/PanellPublic";
import Login from "../components/Login";
import Signup from "../components/Singup";
import ClaudePasOblidada from "../components/ClaudePasOblidada";
import LayoutUsuari from '../layouts/LayoutUsuari';
import PanellUsuari from "../pages/PanellUsuari";
import DetallsUsuari from "../components/DetallsUsuari";
import CanvisUsuari from "../components/CanvisUsuari/index";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="" element={<LayoutArrel />}>
					<Route index element={<PanellPublic />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="claudepasoblidada" element={<ClaudePasOblidada />} />
					<Route path="usuari" element={<LayoutUsuari />}>
						<Route index element={<PanellUsuari />} />
						<Route path="detallsusuari" element={<DetallsUsuari />} />
						<Route path="canvisusuari" element={<CanvisUsuari />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
