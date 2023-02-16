import { useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	sendPasswordResetEmail,
	updatePassword,
	updateEmail,
} from "firebase/auth";
import { auth } from "../../config/firebase/firebase";

export const useAutenticacio = () => {

	const [gestioUsuari, setGestioUsuari] = useState({
		usuariLoguejat: null,
		loadingUsuari: true,
	});
	console.log(
		"Usuari loguejat: ",
		gestioUsuari.usuariLoguejat === null
			? null
			: `${gestioUsuari.usuariLoguejat.email}, \nid: ${gestioUsuari.usuariLoguejat.uid}`
	);

	const signup = (correuElectronic, claudePas) =>
		createUserWithEmailAndPassword(auth, correuElectronic, claudePas);

	const login = (correuElectronic, claudePas) =>
		signInWithEmailAndPassword(auth, correuElectronic, claudePas);

	const resetpassword = (correuElectronic) =>
		sendPasswordResetEmail(auth, correuElectronic);

	const updateemail = (correuElectronic) =>
		updateEmail(gestioUsuari.usuariLoguejat, correuElectronic);

	const updatepassword = (claudePas) =>
		updatePassword(gestioUsuari.usuariLoguejat, claudePas);

	const logout = () => signOut(auth);

	useEffect(() => {
		const cancellaSubscripcio = onAuthStateChanged(auth, (user) =>
			setGestioUsuari({
				usuariLoguejat: user,
				loadingUsuari: false,
			})
		);
		return () => cancellaSubscripcio();
	}, [gestioUsuari.usuariLoguejat]);

	return {
		gestioUsuari,
		signup,
		login,
		resetpassword,
		updateemail,
		updatepassword,
		logout,
	};
};
