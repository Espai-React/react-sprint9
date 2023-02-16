import { Label } from "./BlocInput.styles";

const BlocInput = ({
	etiqueta,
	tipus,
	nom,
	placeholder,
	defaultValue,
	referencia,
	requerit,
	nomesLectura,
}) => (
	<Label htmlFor={nom} readOnly={nomesLectura}>
		{etiqueta}

		<input
			type={tipus}
			id={nom}
			name={nom}
			placeholder={placeholder}
			defaultValue={defaultValue}
			ref={referencia}
			required={requerit}
			readOnly={nomesLectura}
		/>
	</Label>
);

export default BlocInput;
