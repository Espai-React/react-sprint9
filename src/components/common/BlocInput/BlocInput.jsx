import { Label } from "./BlocInput.styles";

const BlocInput = ({
	etiqueta,
	tipus,
	nom,
	placeholder,
	defaultValue,
	referencia,
	requerit,
}) => (
	<Label htmlFor={nom}>
		{etiqueta}
		<input
			type={tipus}
			id={nom}
			name={nom}
			placeholder={placeholder}
			defaultValue={defaultValue}
			ref={referencia}
			required={requerit}
		/>
	</Label>
);

export default BlocInput;
