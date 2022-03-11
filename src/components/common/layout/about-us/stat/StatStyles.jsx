import styled from "styled-components";


export const StatContainer = styled.div `
`;

export const StatNumber = styled.p `
	text-align: left;
	margin: 5px;
	font-size: 32px;
	color: #419c49;
	font-weight: 600;

	@media (max-width: 768px) {
		font-size: 18px;
		margin: 0;
		line-height: 23px;
	}
`;

export const StatName = styled.p `
	text-align: left;
	margin: 5px;
	font-size: 18px;

	@media (max-width: 768px) {
		font-size: 0.8rem;
		margin: 0;
		line-height: 23px;
	}
`;