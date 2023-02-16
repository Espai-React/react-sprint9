import { useAppContext } from "../context/AppContext";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
	const { usuariLoguejat } = useAppContext();

	return usuariLoguejat !== null ? (
		<Navigate to="/" />
	) : (
		<>
			<Outlet />
		</>
	);
};

export default Public;
