import { Outlet } from "react-router-dom";
import Capçalera from "../components/Capçalera";
import Footer from "../components/Footer/index";
import { GlobalStyles } from "../styles/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { THEME } from "../config/themeProvider/theme";

const LayoutArrel = () => (
		<ThemeProvider theme={THEME}>
			<GlobalStyles />
			<header>
				<Capçalera />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Footer />
			</footer>
		</ThemeProvider>
);

export default LayoutArrel;
