import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  font-size: ${({ theme }) => theme.fontSizeGeneral};
}

body {
	font-family: ${({ theme }) => theme.fonts.global};
  background-color: ${({ theme }) => theme.colors.fons};
	height: 50vh;
}

* {
	color: ${({ theme }) => theme.colors.lletraGlobal};	
}
${'' /* 
.App {
	position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	border: 1px solid white;
	border-radius: 40px;
	height: 700px;
	width: 350px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}
button, input  {
	margin: 4px;
  border-radius: 8px;
  border: 1px solid #535b82;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button {
	margin: 10px 0;
	background-color: #535b82;
}
button:hover {
  border-color: #646cff;
}
button:focus, input:focus {
  outline: 1px solid #646cff;	
}
button:focus {
	background: #646cff;
}
input {
	border-color: #535b82;
	flex: 1;
}

form {
	display:flex;
	flex-direction: column;
} */}
`;
