import styled from "styled-components";

export const Contenidor = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	.preferencies {
		width: 100%;
		margin: auto;

		span {
			font-weight: bold;
		}

		ul {
			list-style: none;
			padding: 0.5rem 4rem 0;
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			gap: 0.5rem 1.25rem;
		}
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	fieldset {
		width: 100%;
		background: ${({ theme }) => theme.colors.fonsFosc};
		border: 0.25rem solid ${({ theme }) => theme.colors.voraLilaFluix};
		border-radius: 0.5rem;
		padding-bottom: 1rem;
		cursor: pointer;

		legend {
			font-size: 1.3rem;
			font-weight: bold;
			margin-left: 1.5rem;
			padding: 0.5rem;
		}

		.element-resum {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			padding: 1rem 2rem;
			overflow: hidden;

			.titol-resum{

				span {
					color: ${({ theme }) => theme.colors.lletraLila};
					font-weight: bold;
				}

				span:nth-child(1) {
					font-size: 1.5rem;					
				}

				span:nth-child(2) {
					font-size: 1rem;
				}
			}
		}

		ul {
			list-style: none;
			overflow: hidden;
			display: flex;
			gap: 0.5rem;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			padding: 1rem 1rem 1rem 2rem;

			.element-llista {
				width: 100%;
				display: flex;
				flex-flow: row nowrap;
				justify-content: start;
				gap: 1rem;

				span {
					width: 20%;
					font-weight: bold;
					color: ${({ theme }) => theme.colors.lletraLila};
				}
			}
			.element-llista:nth-child(8) {
				align-items: start;
				text-align: justify;
			}
		}

		.actiu {
			display: block;
		}

		.noActiu {
			display: none;
		}
	}
`;
