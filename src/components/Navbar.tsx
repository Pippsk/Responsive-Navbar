import  {useState} from 'react'
import { NavbarContainer, Leftcontainer, RightContainer, NavbarInnerContainer, NavbarLinkContainer, NavbarLink, LogoContainer, OpenLinksButton, NavbarExtendedContainer,NavbarLinkExtended} from '../Styles/Navbar.style'

import  {FaBars}  from "react-icons/fa"






const Navbar = () => {

const [extendNavbar, setExtendNavbar] = useState(false)


const toggle = () => {
    setExtendNavbar(prev => !prev)
    
}
  return (
  <NavbarContainer extendNavbar = {extendNavbar}>

    <NavbarInnerContainer>

        <Leftcontainer>
            <NavbarLinkContainer>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/products">Products</NavbarLink>
        <NavbarLink to="/contact">Contact Us</NavbarLink>
        <NavbarLink to="/about">About Us</NavbarLink>
        <OpenLinksButton onClick={toggle}> {extendNavbar ? <> &#10005; </> : <FaBars />}  </OpenLinksButton>

    </NavbarLinkContainer>
</Leftcontainer>
  <RightContainer>
        <LogoContainer>
            SunnySide
        </LogoContainer>
  </RightContainer>

    </NavbarInnerContainer>

{extendNavbar && ( 
<NavbarExtendedContainer>
    <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
    <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
    <NavbarLinkExtended to="/contact">Contact Us</NavbarLinkExtended>
    <NavbarLinkExtended to="/about">About Us</NavbarLinkExtended>
</NavbarExtendedContainer>
)}

    </NavbarContainer>

  )
}

export default Navbar
