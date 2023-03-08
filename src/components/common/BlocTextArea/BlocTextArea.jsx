import { Label } from "./BlocTeaxtarea.styles";

const BlocTextarea = ({
	etiqueta,
	nom,
	referencia,
	onChange,
	value,
	requerit,
	nomesLectura,
	perDefecte,
}) => (
	<Label htmlFor={nom}>
		{etiqueta}

		<textarea
			id={nom}
			name={nom}
			onChange={onChange}
			value={value}
			defaultValue={perDefecte}
			ref={referencia}
			required={requerit}
			readOnly={nomesLectura}
		></textarea>
	</Label>
);

export default BlocTextarea;
