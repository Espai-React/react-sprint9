import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const LayoutAdmin = () => {
	const { usuariLoguejat, administrador } = useAppContext();

	return (usuariLoguejat === null && !administrador) ? (
		<Navigate to="/" />
	) : (
		<>
			<Outlet />
		</>
	);
};

export default LayoutAdmin;
