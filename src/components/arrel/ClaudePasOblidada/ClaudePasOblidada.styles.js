import styled from "styled-components";

export const Contenidor = styled.div`
	min-width: 26rem;
	max-width: 32rem;
	margin: 2rem auto;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;

	h2 {
		margin-bottom: 1.5rem;
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	div {
		font-size: 1.1rem;
		display: flex;
		gap: 1rem;

		a {
			font-weight: bold;
		}
	}
`;
