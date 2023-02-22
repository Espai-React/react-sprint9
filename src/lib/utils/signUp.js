import { addDoc, doc, setDoc } from "firebase/firestore";
import { db, refUsuaris } from "../../config/firebase/firebase";

export const signUp = async (
	e,
	correuElectronicRef,
	claudePasRef,
	clauePasConfirmacioRef,
	usuariLoguejat,
	setLogueigUsuari,
	signup,
	navega
) => {
	e.preventDefault();
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});

	if (claudePasRef.current.value !== clauePasConfirmacioRef.current.value) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Les contrasenyes no coincideixen",
		}));
		return;
	}

	try {
		const usuari = await signup(
			correuElectronicRef.current.value,
			claudePasRef.current.value
		);
		await setDoc(doc(db, "usuaris", usuari.user.uid), {
			correuElectronic: usuari.user.email,
			administrador: false,
		});
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Nou usuari: ${usuariLoguejat}`,
		}));
		navega("/usuari");
	} catch (err) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Error en crear nou usuari",
		}));
	}
	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
