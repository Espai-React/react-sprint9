import styled from "styled-components";

export const Button = styled.button`
	width: 100%;
	margin-top: 1rem;
	padding: 0.5rem 1rem;
	background: ${({ theme }) => theme.colors.fonsLilaFluix};
	border: 0.25rem solid ${({ theme }) => theme.colors.voraLilaFluix};
	border-radius: 0.5rem;
	font-size: 1.2rem;
	font-weight: bold;

	&:hover {
		border-color: ${({ theme }) => theme.colors.voraLilaIntens};
		color: ${({ theme }) => theme.colors.titol};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.fonsLilaIntens};
	}

	&:disabled {
		background-color: ${({ theme }) => theme.colors.fons.fons};
	}
`;
