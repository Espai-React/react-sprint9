import { useAutenticacio } from "./useAutenticacio";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../utils/autenticacio/signUp";
import { logIn } from "../utils/autenticacio/logIn";
import { resetPassword } from "../utils/autenticacio/resetPassword";
import { logOut } from "../utils/autenticacio/logOut";
import { logueigAmbGoogle } from "../utils/autenticacio/logueigAmbGoogle";
import { useUsuaris } from "./useUsuaris";
import { actualitzarPerfil } from "../utils/autenticacio/actualitzarPerfil";
import { useAppContext } from "../../context/AppContext";

export const useFormulariAutenticacio = (
	correuElectronicRef,
	claudePasRef,
	claudePasConfirmacioRef,
	nomRef,
	cognomRef,
	poblacioRef,
	codiPostalRef,
	telefonRef
) => {
	const { usuariLoguejatComplet, usuariLoguejat, dadesUsuari, authID } =
		useAppContext();

	const { signup, login, resetpassword, updateemail, updatepassword, logout } =
		useAutenticacio(usuariLoguejatComplet);

	const { setusuari, actualitzarusuari } = useUsuaris();
	const navega = useNavigate();

	const [logueigUsuari, setLogueigUsuari] = useState({
		processant: false,
		error: "",
		missatge: "Els camps marcats amb * són obligatoris",
	});

	const handleSubmitSignup = (e) =>
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
			setLogueigUsuari,
			signup,
			setusuari,
			navega
		);

	const handleSubmitLogin = (e) =>
		logIn(
			e,
			correuElectronicRef,
			claudePasRef,
			usuariLoguejat,
			setLogueigUsuari,
			login,
			navega
		);

	const handleSubmitGoogle = () =>
		logueigAmbGoogle(usuariLoguejat, setLogueigUsuari, setusuari, navega);

	const handleSubmitNovaClaudePas = (e) =>
		resetPassword(e, correuElectronicRef, setLogueigUsuari, resetpassword);

	const handleSubmitUpdateProfile = (e) =>
		actualitzarPerfil(
			e,
			correuElectronicRef,
			claudePasRef,
			usuariLoguejat,
			setLogueigUsuari,
			updateemail,
			updatepassword,
			authID,
			dadesUsuari,
			actualitzarusuari,
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
