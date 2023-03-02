import { Label } from "./BlocCheck.styles";

const BlocCheck = ({
	etiqueta,
	tipus,
	nom,
	referencia,
	onChange,
	value,
	requerit,
	nomesLectura,
	perDefecte
}) => (
	<Label htmlFor={nom}>

		<input
			type={tipus}
			id={nom}
			name={nom}
			onChange={onChange}
			value={value}
			defaultValue={perDefecte}
			ref={referencia}
			required={requerit}
			readOnly={nomesLectura}

		/>
		{etiqueta}
	</Label>
);

export default BlocCheck;
