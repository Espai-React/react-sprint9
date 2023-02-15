import { Button } from "./Boto.styles";

const Boto = ({ tipus, onClick, deshabilitat, children }) => (
	<Button
		className="button"
		type={tipus}
		onClick={onClick}
		disabled={deshabilitat}>
		{children}
	</Button>
);

export default Boto;
