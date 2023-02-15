import { useState } from "react";
import { useAutenticacioContext } from "../../context/AutenticacioContext";
import { useNavigate } from "react-router-dom";
import { signUp } from "../utils/signUp";
import { logIn } from "../utils/logIn";
import { resetPassword } from "../utils/resetPassword";
import { updateProfile } from '../utils/updateProfile';
import { logOut } from "../utils/logOut";
import {logueigAmbGoogle} from '../utils/logueigAmbGoogle';

export const useFormulari = (
	correuElectronicRef,
	claudePasRef,
	clauePasConfirmacioRef
) => {
	const {
		usuariLoguejat,
		signup,
		login,
		resetpassword,
		updateemail,
		updatepassword,
		logout,
	} = useAutenticacioContext();

	const [logueigUsuari, setLogueigUsuari] = useState({
		processant: false,
		error: "",
		missatge: "",
	});
	const navega = useNavigate();

	const handleSubmitSignup = (e) =>
		signUp(
			e,
			correuElectronicRef,
			claudePasRef,
			clauePasConfirmacioRef,
			usuariLoguejat,
			setLogueigUsuari,
			signup,
			navega
		);

	const handleSubmitLogin = (e) =>
		logIn(
			e,
			correuElectronicRef,
			claudePasRef,
			usuariLoguejat,
			logueigUsuari,
			setLogueigUsuari,
			login,
			navega
		);

	const handleSubmitGoogle = () =>
		logueigAmbGoogle(usuariLoguejat, setLogueigUsuari, navega);
	
	const handleSubmitNovaClaudePas = (e) =>
		resetPassword(e, correuElectronicRef, setLogueigUsuari, resetpassword);

	const handleSubmitUpdateProfile = (e) =>
		updateProfile(
			e,
			correuElectronicRef,
			claudePasRef,
			clauePasConfirmacioRef,
			usuariLoguejat,
			setLogueigUsuari,
			updateemail,
			updatepassword,
			navega
		);

	const handleLogout = () =>
		logOut(usuariLoguejat, setLogueigUsuari, logout, navega);

	return {
		error: logueigUsuari.error,
		processant: logueigUsuari.processant,
		missatge: logueigUsuari.missatge,
		handleSubmitSignup,
		handleSubmitLogin,
		handleSubmitGoogle,
		handleSubmitNovaClaudePas,
		handleSubmitUpdateProfile,
		handleLogout,
	};
};
