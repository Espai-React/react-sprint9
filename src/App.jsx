import { ThemeProvider } from "styled-components";
import { THEME } from "./config/theme-provider/theme";
import { GlobalStyles } from "../src/styles/GlobalStyles/GlobalStyles";
import ContextProvider from "./context/AppContext";
import Capçalera from "./components/Capçalera";
import Router from "./Router/Router";
import Footer from "./components/Footer";

const App = () => (
	<ThemeProvider theme={THEME}>
		<GlobalStyles />
		<ContextProvider>
			<header>
				<Capçalera />
			</header>
			<main>
				<Router />
			</main>
			<footer>
				<Footer />
			</footer>
		</ContextProvider>
	</ThemeProvider>
);

export default App;
