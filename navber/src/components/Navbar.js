// 2 rfce
// 5 useState
import React, { useState } from 'react'
// 3.2 NavbarContainer
// 3.6 Left , RightContainer
// import เข้ามา แล้วเอาไปใช้ใน function แต่บางที ดึงไปใช้ใน function แล้ว import มาให้ อัตโนมัติ
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
} from "../styles/Navbar.style"
//4 logo = LogoImg สามารถตั้งเป็นชื่ออื่นได้ เหมือนตัวแปล
import LogoImg from "../assets/Logo-Free.png"

function Navbar() {
    // 5.1 extend setState
    const [extendNavbar, setExtendNavbar] = useState(false)
    return (
        // 3.3 Navbar
        // 3.7 Left, Right
        // 3.10 Inner
        // 3.11 Extens
        // 3.13 LinkCon
        // 3.16 Link
        // 4.2 Logo
        // 4.4 OpenLinksButton  , &#8801 == คือ บล็อค 3 ขีด ให้แสดงในมือถือ
        // 5.2 onClick even , extendNav states ? <>
        // 5.3 copy NavbarLink  to NabarExtendedCon
        // 5.4 extendNavbar &&
        // 5.5 extendNavbar={extendNavbar} in NavbarContainer
        // 5.8 แก้ใน {externNavbar && >> แก้ NavbarLink เป็น NavbarLinkExtended

        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer  >
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/">Home</NavbarLink>
                        <NavbarLink to="/products">Products</NavbarLink>
                        <NavbarLink to="/contact">Contact</NavbarLink>
                        <NavbarLink to="/about">About</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr)
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo src={LogoImg}></Logo>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
                    <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
                    <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer >
    )
}

export default Navbar