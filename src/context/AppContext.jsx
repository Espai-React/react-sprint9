import { createContext, useContext } from "react";
import { useAutenticacio } from "../lib/hooks/useAutenticacio";
import { useBasedeDades } from '../lib/hooks/useBasedeDades';

export const Context = createContext();
export const useAppContext = () => useContext(Context);

const ContextProvider = ({ children }) => {
	const {
		gestioUsuari,
		signup,
		login,
		resetpassword,
		updateemail,
		updatepassword,
		logout,
	} = useAutenticacio();

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
		<Context.Provider value={value}>
			{!gestioUsuari.loadingUsuari && children}
		</Context.Provider>
	);
};

export default ContextProvider;
