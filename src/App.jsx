import { ThemeProvider } from "styled-components";
import { THEME } from "./config/theme-provider/theme";
import { GlobalStyles } from "../src/styles/GlobalStyles/GlobalStyles";
import AutenticacioContextProvider from "./context/AutenticacioContext";
import Capçalera from "./components/Capçalera";
import Router from "./Router/Router";
import Footer from "./components/Footer";

const App = () => (
	<ThemeProvider theme={THEME}>
		<GlobalStyles />
		<AutenticacioContextProvider>
			<header>
				<Capçalera />
			</header>
			<main>
				<Router />
			</main>
			<footer>
				<Footer />
			</footer>
		</AutenticacioContextProvider>
	</ThemeProvider>
);

export default App;
