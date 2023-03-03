import { Contenidor } from "./LlistaUsuari.styles";

import {useAppContext} from '../../../context/AppContext';
import { Subtitol } from '../../../styles/common/Subtitol.styles';

const LlistaUsuari = () => {
	const {
		nom,
		cognom,
		dadesdbUsuaris,
		dadesdbArtistes,
		dadesdbEspais,
		dadesdbEsdeveniments,
	} = useAppContext();
	console.log(
		dadesdbUsuaris,
		dadesdbArtistes,
		dadesdbEspais,
		dadesdbEsdeveniments
	);
	return (
		<Contenidor>
			<div>
				<Subtitol>Esdeveniments per a </Subtitol>
				<h3>{nom} {cognom}</h3>
			</div>
			<fieldset>
				<legend></legend>
			</fieldset>
		</Contenidor>
	);
}

export default LlistaUsuari;
