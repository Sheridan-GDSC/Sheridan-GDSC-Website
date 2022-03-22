import styled from "styled-components"

export const TextInputContainer = styled.div`
	display: grid;
	align-items: start;
	text-align: left;
	width: calc(100% - 30px);
	margin: 10px auto;
`

export const TextInputLabel = styled.label`
	grid-row: 1/2;
	font-size: 0.8rem;
`

export const InputField = styled.input`
	-ms-box-sizing:content-box;
	-moz-box-sizing:content-box;
	-webkit-box-sizing:content-box; 
	box-sizing:content-box;

	grid-row: 2/3;
	margin: 18px auto;
	font-size: 20px;
	border: #e4eefd solid 2px;
	border-radius: 21px;
	opacity: 1;
	background: #ffffff 0% 0% no-repeat padding-box;
	height: 35px;
	width: calc(100% - 20px);
	padding: 0px 0px 0px 20px;
	justify-content: center;
	
	@media screen and (max-width: 865px) {
		font-size: 15px;
	}
`

export const Asterisk = styled.span`
	color: #d75744;
`
export const TextAreaInput = styled.textarea`
	height: calc(200px - (20px * 2));
	width: calc(100% - (20px * 2));
	padding: 20px;
	font-size: 20px;
	border: #e4eefd solid 2px;
	border-radius: 21px;
	opacity: 1;
	background: #ffffff 0% 0% no-repeat padding-box;
	resize: none;
`

export const TextAreaContainer = styled.div`
	width: calc(100%);
	margin: 10px auto;
`

export const DropDown = styled.select`
	-ms-box-sizing:content-box;
	-moz-box-sizing:content-box;
	-webkit-box-sizing:content-box; 
	box-sizing:content-box;

	margin: 18px auto;
	font-size: 20px;
	border: #e4eefd solid 2px;
	border-radius: 21px;
	opacity: 1;
	background: #ffffff 0% 0% no-repeat padding-box;
	height: 35px;
	width: calc(100% - 20px);
	padding: 0px 0px 0px 20px;
	justify-content: center;
`