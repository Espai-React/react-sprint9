import styled from "styled-components";

export const ContenidorPanell = styled.div`
	min-width: 26rem;
	max-width: 32rem;
	height: 95%;
	margin: 1rem auto;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	h2 {
		margin-bottom: 0.5rem;
	}

	h2 + h3 {
		font-weight: bold;
		color: ${({ theme }) => theme.colors.lletraLila};
	}

	.capçalera {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bloc-botons {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 1rem;

		a {
			flex: 1;
		}
	}

	.boto-peu {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center; /* 
		margin-top: auto;
		margin-bottom: -1.5rem; */
	}
`;
