import styled from "styled-components";

export const Contenidor = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	fieldset {
		width: 100%;
		border: 0.25rem solid ${({ theme }) => theme.colors.voraLilaFluix};
		border-radius: 0.5rem;

		legend {
			font-size: 1.3rem;
			margin-left: 1rem;
			padding: 0.5rem;
		}
	}
`;
