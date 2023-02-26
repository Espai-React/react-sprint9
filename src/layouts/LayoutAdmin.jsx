import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const LayoutAdmin = () => {
	const { usuariLoguejat, administrador } = useAppContext();

	return usuariLoguejat !== null ? (
		<Outlet />
	) : (
		<>
			<Navigate to="/" />
		</>
	);
};

export default LayoutAdmin;
