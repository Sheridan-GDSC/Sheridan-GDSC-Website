import styled from "styled-components"


export const ListContainer = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Poppins:wght@300&display=swap');
	font-family: 'Poppins', sans-serif;
	color: white;
	width: 55vw;
	text-align: left;
`

export const Lister = styled.ul`
	padding-left: 20px;
	margin: 3px;
`
export const LinkItem = styled.a`
	text-decoration: none;
	color: inherit;
`

export const ListItem = styled.li`
	text-decoration: none;
	list-style-type: none;
	font-size: 13px;
	border-bottom: rgba(255, 255, 255, 0.3) solid 1px;
	height: 57px;
	line-height: 57px;
	width: 100%;
`