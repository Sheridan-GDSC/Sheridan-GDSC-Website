import styled from "styled-components";

export const Container = styled.div `
	padding: 30px;
	text-align: left;
	background: rgb(255, 255, 255) 0 0 no-repeat padding-box;
	box-shadow: 0 3px 6px #00000029;
	border-radius: 43px;
	margin: 10px 0;
`;

export const DescriptionTitle = styled.h3 `
	font-size: 32px;
	color: #419c49;
	margin: 10px 0 20px;

	@media (max-width: 768px) {
		font-size: 18px;
	}
`;

export const DescriptionText = styled.p `
	letter-spacing: -0.54px;
	color: #797d81;
	line-height: 1.4rem;
	font-size: 18px;
	margin: 0;
	
	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;


