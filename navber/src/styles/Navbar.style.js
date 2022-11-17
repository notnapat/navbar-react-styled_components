// 3
import styled from "styled-components";

//3.1
export const NavbarContainer = styled.nav`
width: 100;
height: 80px;
background-color: black;
display: flex;
flex-direction: column;
`;
//3.3
export const LeftContainer = styled.div`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;
background-color: red;
`
//3.4
export const RightContainer = styled.div`
flex: 30%;
display: flex;
align-items: center;
padding-left: 50px;
background-color: salmon;
`