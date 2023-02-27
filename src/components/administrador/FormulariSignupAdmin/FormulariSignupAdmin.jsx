import { useRef } from "react";
import { Formulari } from "../../../styles/common/Formulari.styles";
import BlocInput from "../../common/BlocInput";
import Boto from "../../common/Boto";
import { useFormulariAutenticacio } from "../../../lib/hooks/useFormulariAutenticacio";
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { condAdmin } from '../../../lib/constants/condAdmin';

const FormulariSignupAdmin = () => {
	const { dadesUsuari, setDades } = useUsuaris();
	const {
		correuElectronic,
		administrador,
		nom,
		cognom,
		poblacio,
		codiPostal,
		telefon,
	} = dadesUsuari;
	const claudePasConfirmacioRef = useRef();

	const { error, missatge, processant, handleSubmitSignupAdmin } =
		useFormulariAutenticacio();
	const { usuariLoguejat } = useAppContext();
	const navega = useNavigate();

	const handleSubmit = (e) =>
		handleSubmitSignupAdmin(
			e,
			dadesUsuari,
			claudePasConfirmacioRef,
			usuariLoguejat,
			navega
		);

	return (
		<Formulari id="signup" onSubmit={handleSubmit}>
			<BlocInput
				etiqueta="Correu electrònic *"
				tipus="email"
				nom="correuElectronic"
				value={correuElectronic}
				onChange={(e) => setDades(e.target.nom, e.target.value)}
				requerit={true}
			/>

			<BlocInput
				etiqueta="Contrasenya *"
				tipus="password"
				nom="claudePas"
				value={claudePas}
				onChange={(e) => setDades(e.target.nom, condAdmin(e.target.value))}
				requerit={true}
			/>

			<BlocInput
				etiqueta="Confirmació contrasenya *"
				tipus="password"
				nom="claudePasConfirmacio"				referencia={claudePasConfirmacioRef}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Nom *"
				tipus="text"
				nom="nom"
				value={nom}
				onChange={(e) => setDades(e.target.nom, e.target.value)}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Cognom"
				tipus="text"
				nom="cognom"
				value={cognom}
				onChange={(e) => setDades(e.target.nom, e.target.value)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Població"
				tipus="text"
				nom="Poblacio"
				value={poblacio}
				onChange={(e) => setDades(e.target.nom, e.target.value)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Codi Postal"
				tipus="text"
				nom="Codi Postal"
				value={codiPostal}
				onChange={(e) => setDades(e.target.nom, e.target.value)}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Telefon"
				tipus="tel"
				nom="telefon"
				value={telefon}
				onChange={(e) => setDades(e.target.nom, e.target.value)}
				requerit={false}
			/>

			<div className="avis">
				{missatge && <span>{missatge}</span>}
				{error && <span>{error}</span>}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Crear usuari
			</Boto>
		</Formulari>
	);
};

export default FormulariSignupAdmin;
