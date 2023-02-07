import { ThemeProvider } from "styled-components";
import { THEME } from "../src/lib/constants/theme";
import { GlobalStyles } from "../src/styles/GlobalStyles/GlobalStyles";

const App = () => (
	<ThemeProvider theme={THEME}>
		<GlobalStyles />
		<div className="App">
			<h2>Envivo</h2>
		</div>
	</ThemeProvider>
);

export default App;
