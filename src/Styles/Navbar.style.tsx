import styled from 'styled-components'

import { Link } from 'react-router-dom'

type NavbarContainerProps = {
    extendNavbar: boolean
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`
    width:100%;
    height:${({extendNavbar}) => (extendNavbar ? "100vh" : "80px")} ;
    background-color:black;
    display: flex;
    flex-direction: column;
    @media (min-width:700px){
        height: 80px;
    }
`

export const Leftcontainer = styled.div`
    flex:70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
   
`

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;

`

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`

export const NavbarLinkContainer = styled.div`
    display: flex;
`

export const NavbarLink = styled(Link)`
    color: white;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media(max-width:700px){
        display: none;
    }
`

export const LogoContainer = styled.div`
    margin: 10px;
    max-width: 180px;
    height: auto;
    color: White;
    display: flex;
    align-items: center;
`

export const OpenLinksButton = styled.button`
    
    background-color: black;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;

    @media(min-width:700px){
        display: none;
    }
`
export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width:700px) {
        display: none;
    }
`

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

  
`
