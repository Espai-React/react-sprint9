import styled from "styled-components";

export const Label = styled.label`
	width: 40%;
	display: flex;
	align-items: end;
	gap: 1rem;
	padding-left: 2rem;
	font-size: 1.1rem;

	&:hover,
	&:hover input {
		cursor: pointer;
	}

	input {
		appearance: none;
		position: relative;
		background-color: ${({ theme }) => theme.colors.fonsFosc};
		border: 0.25rem solid ${({ theme }) => theme.colors.voraLilaFluix};
		color: ${({ theme }) => theme.colors.titol};
		border-radius: 0.25rem;
		height: 1.5rem;
		width: 1.5rem;

		&:checked::after {
			position: absolute;
			bottom: -.4rem;
			content: "✔";
			font-size: 1.5rem;
			color: ${({ theme }) => theme.colors.titol};
			overflow: hidden;
		}

		&:checked {
			background: ${({ theme }) => theme.colors.voraLilaIntens};
			color: ${({ theme }) => theme.colors.titol};
		}

		&:focus {
			border-color: ${({ theme }) => theme.colors.voraLilaIntens};
		}

		&[readOnly],
		&[defaultValue] {
			color: ${({ theme }) => theme.colors.missatge};
		}
	}
`;
