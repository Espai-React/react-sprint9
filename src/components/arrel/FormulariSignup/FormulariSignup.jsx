import { useRef } from "react";
import { Formulari } from "../../../styles/common/Formulari.styles";
import BlocInput from "../../common/BlocInput";
import Boto from "../../common/Boto";
import { useFormulariAutenticacio } from "../../../lib/hooks/useFormulariAutenticacio";
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { usedb } from "../../../lib/hooks/usedb";
import { condAdmin } from "../../../lib/constants/condAdmin";
import { estils } from "../../../lib/constants/llistesChecks";
import BlocCheck from "../../common/BlocCheck/BlocCheck";

const FormulariSignup = () => {
	const { dadesUsuari, setDades, setParaulesClau, setDadesUsuari } = usedb();
	const claudePasRef = useRef();
	const claudePasConfirmacioRef = useRef();

	const { error, missatge, processant, handleSubmitSignup } =
		useFormulariAutenticacio();
	const { usuariLoguejat } = useAppContext();
	const navega = useNavigate();

	const handleSubmit = (e) =>
		handleSubmitSignup(
			e,
			dadesUsuari,
			claudePasRef,
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
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Contrasenya *"
				tipus="password"
				nom="claudePas"
				referencia={claudePasRef}
				onChange={() =>
					setDades(
						"administrador",
						condAdmin(claudePasRef.current.value),
						setDadesUsuari
					)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Confirmació contrasenya *"
				tipus="password"
				nom="claudePasConfirmacio"
				referencia={claudePasConfirmacioRef}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Nom *"
				tipus="text"
				nom="nom"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={true}
			/>
			<BlocInput
				etiqueta="Cognom"
				tipus="text"
				nom="cognom"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Població"
				tipus="text"
				nom="poblacio"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Codi Postal"
				tipus="text"
				nom="codiPostal"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
			/>
			<BlocInput
				etiqueta="Telefon"
				tipus="tel"
				nom="telefon"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
			/>
			<fieldset
				className="preferencies" name="preferencies"
				onChange={(e) => {
					setParaulesClau(
						e.target.checked,
						e.target.closest(".preferencies").name,
						e.target.value,
						setDadesUsuari
					);
				}}>
				<legend>Preferènies d'espectacle *</legend>
				<ul>
					{estils.map((estil, index) => (
						<BlocCheck
							key={index}
							etiqueta={estil[0].toUpperCase() + estil.substring(1)}
							tipus="checkbox"
							nom={estil}
							value={estil}
						/>
					))}
				</ul>
			</fieldset>

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

export default FormulariSignup;
