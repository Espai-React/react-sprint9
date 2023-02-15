import styled from "styled-components";

export const Contenidor = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem;
	background: ${({ theme }) => theme.colors.fonsLilaFluix};
	border-top: 0.5rem solid ${({ theme }) => theme.colors.divisor};

	p:nth-child(1) {
		font-size: 1.8rem;
		font-family: ${({ theme }) => theme.fonts.titol};
		color: ${({ theme }) => theme.colors.titol};
	}
`;
