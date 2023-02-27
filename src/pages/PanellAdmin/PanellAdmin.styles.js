import styled from "styled-components";

export const ContenidorPanell = styled.div`
	min-width: 26rem;
	max-width: 32rem;
	height: 95%;
	margin: 0 auto;
	padding: 2rem 1rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		margin-bottom: 0.5rem;
	}

	.capçalera {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.subtitol {
		margin-top: 3rem;
	}

	.bloc-botons-admin {
		width: 100%;
		display: flex;
		flex-flow: wrap;
		justify-content: center;
		column-gap: 1rem;

		a {
			flex: 1 1 40%;
		}
	}

	.bloc-amagat {
		display: none;
	}

	.boto-peu {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-top: auto;
		margin-bottom: -1.5rem;
	}
`;
