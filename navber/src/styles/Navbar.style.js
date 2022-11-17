// 3
import styled from "styled-components";
// 3.14 Link
import { Link } from "react-router-dom";


//3.1
// ?5.6?
export const NavbarContainer = styled.nav`
width: 100%;
height: ${(props) => (props.extendNavbar ? "100vh" : "80px")}; /* vh == %*/
background-color: black;
display: flex;
flex-direction: column;

@media (min-width: 701px){
    height: 80px;
}
/* width: 100;
height: 80px;
background-color: black;
display: flex;
flex-direction: column; */
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
justify-content: flex-end;
padding-right:50px;
/* flex: 30%;
display: flex;
align-items: center;
padding-left: 50px;
background-color: salmon; */
`

//3.8
export const NavbarInnerContainer = styled.div`
width:100%;
height:80px;
display: flex;
`
//3.9
// ?5.6? style to NavbarExten 
export const NavbarExtendedContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 701px){
    display: none;
}
`;
//3.12
export const NavbarLinkContainer = styled.div`
display:flex;
`
//3.15 
//4.5 @media
export const NavbarLink = styled(Link)`
color:white;
font-size:x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration:none;
margin:10px;

@media (max-width: 700px) {
    display:  none;
}
`
// 5.7
export const NavbarLinkExtended = styled(Link)`
color:white;
font-size:x-large;
font-family: Arial, Helvetica, sans-serif;
text-decoration:none;
margin:10px;
`
//4.1
export const Logo = styled.img`
margin:10px;
max-width:180px;
height: auto;
`
//4.3
//4.6 @media
export const OpenLinksButton = styled.button`
width:70px;
height:50px;
background:none;
border:none;
color:white;
font-size:45px;
cursor: pointer;

@media (min-width: 701px) {
    display:  none;
}
`

