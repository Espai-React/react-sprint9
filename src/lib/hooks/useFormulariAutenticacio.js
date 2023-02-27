import { useAutenticacio } from "./useAutenticacio";
import { useState } from "react";
import { signUp } from "../utils/autenticacio/signUp";
import { logIn } from "../utils/autenticacio/logIn";
import { resetPassword } from "../utils/autenticacio/resetPassword";
import { logOut } from "../utils/autenticacio/logOut";
import { logueigAmbGoogle } from "../utils/autenticacio/logueigAmbGoogle";
import { useUsuaris } from "./useUsuaris";
import { actualitzarPerfil } from "../utils/autenticacio/actualitzarPerfil";

export const useFormulariAutenticacio = () => {
	const { signup, login, resetpassword, updateemail, updatepassword, logout } =
		useAutenticacio();

	const { setDades, setusuari, actualitzarusuari } = useUsuaris();

	const [logueigUsuari, setLogueigUsuari] = useState({
		processant: false,
		error: "",
		missatge: "Els camps marcats amb * són obligatoris",
	});

	const handleSubmitSignup = (
		e,
		correuElectronicRef,
		claudePasRef,
		claudePasConfirmacioRef,
		nomRef,
		cognomRef,
		poblacioRef,
		codiPostalRef,
		telefonRef,
		usuariLoguejat,
		navega
	) =>
		signUp(
			e,
			correuElectronicRef,
			claudePasRef,
			claudePasConfirmacioRef,
			nomRef,
			cognomRef,
			poblacioRef,
			codiPostalRef,
			telefonRef,
			usuariLoguejat,
			navega,
			setLogueigUsuari,
			signup,
			setusuari
		);

	const handleSubmitSignupAdmin = (
		e,
		dadesUsuari,
		claudePasConfirmacioRef,
		usuariLoguejat,
		navega
	) =>
		signUpAdmin(
			e,
			dadesUsuari,
			claudePasConfirmacioRef,
			usuariLoguejat,
			navega,
			setLogueigUsuari,
			signup,
			setusuari
		);

	const handleSubmitLogin = (
		e,
		correuElectronicRef,
		claudePasRef,
		usuariLoguejat,
		navega
	) =>
		logIn(
			e,
			correuElectronicRef,
			claudePasRef,
			usuariLoguejat,
			navega,
			setLogueigUsuari,
			login
		);

	const handleSubmitGoogle = (usuariLoguejat, navega) =>
		logueigAmbGoogle(usuariLoguejat, setLogueigUsuari, navega);

	const handleSubmitNovaClaudePas = (e, correuElectronicRef) =>
		resetPassword(e, correuElectronicRef, setLogueigUsuari, resetpassword);

	const handleSubmitUpdateProfile = (
		e,
		nouCorreuElectronicRef,
		novaClaudePasRef,
		novaClaudePasConfirmacioRef,
		usuariLoguejatComplet,
		usuariLoguejat,
		authID,
		dadesUsuari,
		navega
	) =>
		actualitzarPerfil(
			e,
			nouCorreuElectronicRef,
			novaClaudePasRef,
			novaClaudePasConfirmacioRef,
			usuariLoguejatComplet,
			usuariLoguejat,
			authID,
			dadesUsuari,
			navega,
			setLogueigUsuari,
			updateemail,
			updatepassword,
			actualitzarusuari
		);

	const handleLogout = (usuariLoguejat, navega) =>
		logOut(usuariLoguejat, setLogueigUsuari, logout, navega);

	return {
		error: logueigUsuari.error,
		processant: logueigUsuari.processant,
		missatge: logueigUsuari.missatge,
		handleSubmitSignup,
		handleSubmitSignupAdmin,
		handleSubmitLogin,
		handleSubmitGoogle,
		handleSubmitNovaClaudePas,
		handleSubmitUpdateProfile,
		handleLogout,
	};
};
