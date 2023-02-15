import styled from "styled-components";

export const Formulari = styled.form`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	.error {
		height: 1rem;

		span {
			height: 1rem;
			color: ${({ theme }) => theme.colors.missatge};
		}
	}
`;
