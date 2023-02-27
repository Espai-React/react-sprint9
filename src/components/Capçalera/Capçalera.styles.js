import styled from "styled-components";

export const Contenidor = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.fonsLilaFluix};
	border-bottom: 0.5rem solid ${({ theme }) => theme.colors.divisor};

	h1 {
		font-family: ${({ theme }) => theme.fonts.titol};
		color: ${({ theme }) => theme.colors.titol};
		padding: 2rem 0;
		font-size: 3.5rem;
	}

	a {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 2rem;
	}
`;
