import styled from "styled-components";

export const Contenidor = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.fonsLilaFluix};
	border-bottom: .5rem solid ${({ theme }) => theme.colors.divisor};

	h1 {
		font-family: ${({ theme }) => theme.fonts.titol};
		color: ${({ theme }) => theme.colors.titol};
		padding: 2rem 0;
		font-size: 3.5rem;
	}
`;
