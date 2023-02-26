import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const LayoutUsuari = () => {
	const { usuariLoguejat } = useAppContext();

	return usuariLoguejat !== null ? (
		<Outlet />
	) : (
		<>
			<Navigate to="/" />
		</>
	);
};

export default LayoutUsuari;
