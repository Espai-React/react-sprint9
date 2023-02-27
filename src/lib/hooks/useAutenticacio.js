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
	});

	const signup = (correuElectronic, claudePas) =>
		createUserWithEmailAndPassword(auth, correuElectronic, claudePas);

	const login = (correuElectronic, claudePas) =>
		signInWithEmailAndPassword(auth, correuElectronic, claudePas);

	const resetpassword = (correuElectronic) =>
		sendPasswordResetEmail(auth, correuElectronic);

	const updateemail = (usuariLoguejatComplet, correuElectronic) =>
		updateEmail(usuariLoguejatComplet, correuElectronic);

	const updatepassword = (usuariLoguejatComplet, claudePas) =>
		updatePassword(usuariLoguejatComplet, claudePas);

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
