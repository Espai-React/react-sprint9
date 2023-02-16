import { createContext, useContext } from "react";
import { useAutenticacio } from "../lib/hooks/useAutenticacio";
import { useBasedeDades } from '../lib/hooks/useBasedeDades';

export const AutenticacioContext = createContext();
export const useAutenticacioContext = () => useContext(AutenticacioContext);

const AutenticacioContextProvider = ({ children }) => {
	const {
		gestioUsuari,
		signup,
		login,
		resetpassword,
		updateemail,
		updatepassword,
		logout,
	} = useAutenticacio();

	const {} = useBasedeDades();

	const value = {
		usuariLoguejat:
			gestioUsuari.usuariLoguejat === null
				? null
				: gestioUsuari.usuariLoguejat.email,
		signup,
		login,
		resetpassword,
		updateemail,
		updatepassword,
		logout,
	};

	return (
		<AutenticacioContext.Provider value={value}>
			{!gestioUsuari.loadingUsuari && children}
		</AutenticacioContext.Provider>
	);
};

export default AutenticacioContextProvider;
