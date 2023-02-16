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
		administrador: false
	});

	const { usuariLoguejat, administrador } = gestioUsuari;

	console.log(
		"Usuari loguejat: ",
		usuariLoguejat === null
			? null
			: `${usuariLoguejat.email}, \nid: ${usuariLoguejat.uid}, \nadministrador: ${administrador}`
	);

	const signup = (correuElectronic, claudePas) =>
		createUserWithEmailAndPassword(auth, correuElectronic, claudePas);

	const login = (correuElectronic, claudePas) =>
		signInWithEmailAndPassword(auth, correuElectronic, claudePas);

	const resetpassword = (correuElectronic) =>
		sendPasswordResetEmail(auth, correuElectronic);

	const updateemail = (correuElectronic) =>
		updateEmail(usuariLoguejat, correuElectronic);

	const updatepassword = (claudePas) =>
		updatePassword(usuariLoguejat, claudePas);

	const logout = () => signOut(auth);

	useEffect(() => {
		const cancellaSubscripcio = onAuthStateChanged(auth, (user) =>
			setGestioUsuari((prev) => ({
				...prev,
				usuariLoguejat: user,
				loadingUsuari: false,
			}))
		);
		return () => cancellaSubscripcio();
	}, [usuariLoguejat]);

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
