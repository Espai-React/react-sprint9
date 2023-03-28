import { updateCurrentUser } from "firebase/auth";
import { auth } from "../../../config/firebase/firebase";

export const altaUsuari = async (
	e,
	dadesUsuari,
	claudePasRef,
	claudePasConfirmacioRef,
	setLogueigUsuari,
	signup,
	setElement
) => {
	e.preventDefault();
	const adminUsuari = auth.currentUser;
	setLogueigUsuari({
		processant: false,
		error: "",
		missatge: "",
	});

	const { correuElectronic } = dadesUsuari;
	if (claudePasRef.current.value !== claudePasConfirmacioRef.current.value) {
		setLogueigUsuari((prev) => ({
			...prev,
			error: "Les contrasenyes no coincideixen",
		}));
		return;
	}

	try {
		const usuari = await signup(correuElectronic, claudePasRef.current.value);
		console.log(usuari.user.uid);
		console.log(dadesUsuari);
		await setElement("usuaris", usuari.user.uid, dadesUsuari);
		document.getElementById("altaUsuari").reset();
		const inputs = document.querySelectorAll('input[type="checkbox"]');
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].checked = false;
		}
		setLogueigUsuari((prev) => ({
			...prev,
			missatge: `Alta usuari: ${correuElectronic}`,
		}));
		//await updateCurrentUser(auth, adminUsuari);

	} catch (err) {
		let error;
		switch (err.message) {
			case "Firebase: Error (auth/email-already-in-use).":
				error = "Correu electrònic ja en ús";
				break;
			default:
				error = "Error en crear nou usuari";
				break;
		}
		setLogueigUsuari((prev) => ({
			...prev,
			error,
		}));
	}
	setLogueigUsuari((prev) => ({
		...prev,
		processant: false,
	}));
};
