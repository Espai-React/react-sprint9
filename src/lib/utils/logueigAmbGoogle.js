import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config/firebase/firebase";

const googleProvider = new GoogleAuthProvider();

export const logueigAmbGoogle = async (
	usuariLoguejat,
	setLogueigUsuari,
	navega
) => {
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});
	try {
		await signInWithPopup(auth, googleProvider);
		setLogueigUsuari({
			error: "",
			processant: true,
			missatge: `Nova sessió de Google usuari: ${usuariLoguejat}`,
		});
		navega("/usuari");
	} catch (err) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Error càrrega sesssió usuari smb Google",
		}));
	}

	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
