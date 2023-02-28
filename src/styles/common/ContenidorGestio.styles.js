import styled from "styled-components";

export const ContenidorGestio = styled.div`
	min-width: 26rem;
	max-width: 32rem;
	height: 100%;
	margin: 0 auto;
	padding: 2.5rem 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	
	.capçalera {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bloc-botons {
		width: 100%;
		display: flex;
		flex-flow: wrap;
		justify-content: center;
		column-gap: 1rem;

		a {
			flex: 1 1 40%;

			button {
				height: 80%;
			}
		}
	}

	.boto-peu {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center; /* 
		margin-top: auto; */
	}
`;
