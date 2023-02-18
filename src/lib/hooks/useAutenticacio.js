import { useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	updatePassword,
	updateEmail,
} from "firebase/auth";
import { auth } from "../../config/firebase/firebase";

export const useAutenticacio = () => {
	const [gestioUsuari, setGestioUsuari] = useState({
		usuariLoguejat: null,
		loadingUsuari: true,
		administrador: false,
	});
	const { usuariLoguejat } = gestioUsuari;

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

	return {
		gestioUsuari,
		setGestioUsuari,
		signup,
		login,
		resetpassword,
		updateemail,
		updatepassword,
		logout,
	};
};

