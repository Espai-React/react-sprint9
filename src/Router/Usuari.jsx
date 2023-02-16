import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Usuari = () => {
	const { usuariLoguejat } = useAppContext();

	return usuariLoguejat === null ? (
		<Navigate to="/" />
	) : (
		<>
			<Outlet />
		</>
	);
};

export default Usuari;
