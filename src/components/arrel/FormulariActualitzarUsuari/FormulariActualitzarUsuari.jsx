import { Formulari } from "../../../styles/common/Formulari.styles";
import BlocInput from "../../common/BlocInput";
import Boto from "../../common/Boto";
import { useFormulariUsuari } from "../../../lib/hooks/useFormulariUsuari";
import { useAppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

const FormulariActualitzarUsuari = () => {
	const {
		nom,
		cognom,
		poblacio,
		codiPostal,
		telefon,
		usuariLoguejat,
		authID,
		setDades,
		setDadesUsuari,
		dadesUsuari,
	} = useAppContext();
	const navega = useNavigate();

	const { error, processant, handleSubmitActualitzarUsuari } =
		useFormulariUsuari();
	const handleSubmit = (e) =>
		handleSubmitActualitzarUsuari(
			e,
			dadesUsuari,
			usuariLoguejat,
			authID,
			navega
		);

	return (
		<Formulari id="dadesUsuari" onSubmit={handleSubmit}>
			<BlocInput
				etiqueta="Nom nou"
				tipus="text"
				nom="nom"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
				placeholder={nom}
			/>
			<BlocInput
				etiqueta="Cognom nou"
				tipus="text"
				nom="cognom"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
				placeholder={cognom}
			/>
			<BlocInput
				etiqueta="Població nova"
				tipus="text"
				nom="poblacio"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
				placeholder={poblacio}
			/>
			<BlocInput
				etiqueta="Codi Postal nou"
				tipus="text"
				nom="codiPostal"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
				placeholder={codiPostal}
			/>
			<BlocInput
				etiqueta="Número de telèfon nou"
				tipus="tel"
				nom="telefon"
				onChange={(e) =>
					setDades(e.target.name, e.target.value, setDadesUsuari)
				}
				requerit={false}
				placeholder={telefon}
			/>
			<div className="avis">
				{error ? (
					<span>{error}</span>
				) : (
					<span>
						{missatge === "Els camps marcats amb * són obligatoris"
							? ""
							: missatge}
					</span>
				)}
			</div>
			<Boto tipus="submit" deshabilitat={processant}>
				Aplicar canvis
			</Boto>
		</Formulari>
	);
};

export default FormulariActualitzarUsuari;
