import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutArrel from "../layouts/LayoutArrel";
import PanellPublic from "../pages/PanellPublic";
import Login from "../components/Login";
import Signup from "../components/Singup";
import ClaudePasOblidada from "../components/ClaudePasOblidada";
import LayoutAdmin from "../layouts/LayoutAdmin";
import PanellAdmin from "../pages/PanellAdmin/PanellAdmin";
import LayoutUsuari from "../layouts/LayoutUsuari";
import PanellUsuari from "../pages/PanellUsuari";
import ActualitzarUsuari from "../components/ActualitzarUsuari";
import ActualitzarPerfil from "../components/ActualitzarPerfil";
import ContextProvider from '../context/AppContext';



const Router = () => {
	return (
		<BrowserRouter>
			<ContextProvider>
				<Routes>
					<Route path="" element={<LayoutArrel />}>
						<Route index element={<PanellPublic />} />
						<Route path="login" element={<Login />} />
						<Route path="signup" element={<Signup />} />
						<Route path="claudepasoblidada" element={<ClaudePasOblidada />} />
						<Route path="admin" element={<LayoutAdmin />}>
							<Route index element={<PanellAdmin />}></Route>
						</Route>
						<Route path="usuari" element={<LayoutUsuari />}>
							<Route index element={<PanellUsuari />} />
							<Route path="actualitzarusuari" element={<ActualitzarUsuari />} />
							<Route path="actualitzarperfil" element={<ActualitzarPerfil />} />
						</Route>
					</Route>
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	);
};

export default Router;
