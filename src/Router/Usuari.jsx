import { Navigate, Outlet } from "react-router-dom";
import { useAutenticacioContext } from "../context/AutenticacioContext";

const Usuari = () => {
	const { usuariLoguejat } = useAutenticacioContext();

	return usuariLoguejat === null ? (
		<Navigate to="/" />
	) : (
		<>
			<Outlet />
		</>
	);
};

export default Usuari;
