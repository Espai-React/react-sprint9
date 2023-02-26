import { Label } from "./BlocInput.styles";

const BlocInput = ({
	etiqueta,
	tipus,
	nom,
	placeholder,
	referencia,
	requerit,
	nomesLectura,
	perDefecte
}) => (
	<Label htmlFor={nom}>
		{etiqueta}

		<input
			type={tipus}
			id={nom}
			name={nom}
			placeholder={placeholder}
			defaultValue={perDefecte}
			ref={referencia}
			required={requerit}
			readOnly={nomesLectura}

		/>
	</Label>
);

export default BlocInput;
