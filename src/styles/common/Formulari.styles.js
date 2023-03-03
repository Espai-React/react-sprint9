import styled from "styled-components";

export const Formulari = styled.form`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	fieldset {
		width: 100%;
		border: 0.25rem solid ${({ theme }) => theme.colors.voraLilaFluix};
		border-radius: 0.5rem;
		/* height: 10rem; */
		overflow: auto;

		legend {
			font-size: 1.1rem;
			margin-left: 1rem;
			padding: 0.5rem;
		}

		ul {
			margin: auto;
			padding: 1rem 1rem 2rem 4rem;
			display: flex;
			flex-flow: row wrap;
			gap: 1rem;
		}
	}

	.avis {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;

		span {
			height: 1rem;
			color: ${({ theme }) => theme.colors.missatge};
		}
	}
`;
