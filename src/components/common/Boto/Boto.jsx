import { Button } from "./Boto.styles";

const Boto = ({ tipus, onClick, text, deshabilitat, children }) => (
	<Button
		className="button"
		type={tipus}
		onClick={onClick}
		disabled={deshabilitat}>
		{text}
		{children}
	</Button>
);

export default Boto;
