import styled from "styled-components";

export const Contenidor = styled.div`
	min-width: 26rem;
	max-width: 32rem;
	margin: 1rem auto;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	h2 {
		margin-bottom: 0.5rem;
	}

	.capçalera {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bloc-botons {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
	}
`;
