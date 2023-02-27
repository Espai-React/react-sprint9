import { Outlet } from "react-router-dom";
import Capçalera from "../components/Capçalera";
import Footer from "../components/Footer/index";
import { GlobalStyles } from "../styles/GlobalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { THEME } from '../config/themeProvider/theme';
import {Contenidor} from './LayoutArrel.styles';

const LayoutArrel = () => (
		<ThemeProvider theme={THEME}>
			<Contenidor>
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
			</Contenidor>
		</ThemeProvider>
);

export default LayoutArrel;
