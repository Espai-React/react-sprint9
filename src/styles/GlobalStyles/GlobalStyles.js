import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  font-size: ${({ theme }) => theme.fontSizeGeneral};
}

body {
	font-family: ${({ theme }) => theme.fonts.global};
  background-color: ${({ theme }) => theme.colors.fons};
}

* {
	color: ${({ theme }) => theme.colors.lletraGlobal};	
	transition: all .3s;
  animation: fade-in .3s;
}

@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
`;
