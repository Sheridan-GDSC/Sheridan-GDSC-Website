import styled from 'styled-components';

export const Container = styled.div`
	text-align: center;
	margin: 0px;
	font-family: 'Poppins', sans-serif;
	position: relative;
	overflow: hidden;
	padding: 0px 0px 150px;
`

export const ContactHeader = styled.h1`
	font-size: 2rem;
	color: #4892eb;
	padding-top: 50px;
	margin: 0px auto;
	width: 300px;
	position: relative;
`

export const TitleUnderline = styled.div`
	height: 2px;
	width: 250px;
	margin: 0px;
	position: absolute;
	background-color: #4892eb;
	top: 105px;
	left: 120px;
	@media screen and (max-width: 865px) {
		width: 200px;
	}
`

export const ContactDescription = styled.p`
	width: 45%;
	margin: 40px auto 125px;
	font-size: 1rem;
	color: #797d81;

	
@media screen and (max-width: 865px) {
	font-size: 0.8rem;
}
`

export const GreenCircle = styled.img`
	margin: 0px;
	width: 300px;
	position: absolute;
	top: -115px;
	right: -130px;
	z-index: 0;

	@media screen and (max-width: 865px) {
		width: 100px;
		top: -40px;
		right: -35px;
	}
`

export const BlueBackground = styled.div`
	height: 45%;
	width: 100%;
	margin: 0px;
	background-color: rgba(90, 139, 234, 0.08);
	position: absolute;
	top: 0px;
	left: 0;
	z-index: -1;
`