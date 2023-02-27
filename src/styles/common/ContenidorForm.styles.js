import styled from "styled-components";

export const ContenidorForm = styled.div`
	min-width: 26rem;
	max-width: 32rem;
	height: 100%;
	margin: 2rem auto;
	padding: 2rem 1rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	h2 {
		margin-bottom: 1.5rem;
	}

	.capçalera {
		display: flex;
		flex-direction: column;
		align-items: center;

		h2 {
			margin-bottom: 0.5rem;
		}
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.peu {
		font-size: 1.1rem;
		display: flex;
		gap: 1rem;

		a {
			font-weight: bold;
		}
	}
`;
