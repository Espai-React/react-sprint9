import { useAutenticacioContext } from "../context/AutenticacioContext";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
	const { usuariLoguejat } = useAutenticacioContext();

	return usuariLoguejat !== null ? (
		<Navigate to="/" />
	) : (
		<>
			<Outlet />
		</>
	);
};

export default Public;
