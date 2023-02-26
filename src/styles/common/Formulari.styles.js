import styled from "styled-components";

export const Formulari = styled.form`
	display: flex;
	align-items: center;
	gap: 0.5rem;

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
