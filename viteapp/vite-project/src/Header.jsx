import React, { useState } from "react";
import './App.css'
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";



function Header() {
  const [nav, setNav] = useState(false);
  return (
    <HeaderTop>
      <HeaderInner>
        <Logo>
          <LogoLink href="#">
            <LogoImg src="logo.svg" alt="logo" />
          </LogoLink>
        </Logo>
        <Menu>       
          <MenuList >
            <MenuLi>
              <MenuLink href="#">
                Home
              </MenuLink>
            </MenuLi>
            <MenuLi>
              <MenuLink href="#">
                About
              </MenuLink>
            </MenuLi>
          </MenuList>  
        </Menu>
        <MobileBtn onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose /> : <AiOutlineMenu/>  }
        </MobileBtn>
      </HeaderInner>
    </HeaderTop>
  )
}

const HeaderTop = styled.div`
  display: flex;
  width: 100%;
  background-color: #F4F4F9;
  min-height: 72px;
  height: fit-content;
  padding: 18px;
`;

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
`;

const LogoLink = styled.a`
`;

const LogoImg = styled.img`
`;

const Menu = styled.div`
`;

const MenuList = styled.ul`
  display: flex;
  gap: 50px;
      @media ( max-width: 600px) {

    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: #F4F4F9;
    z-index: 10;
    
}
`;

const MenuLink = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 19px;
  color: #000000;

  @media ( max-width: 600px) {
    font-size: 40px;   
  }
  
`;

const MenuLi = styled.li`
`;

const MobileBtn = styled.div`
  font-size: 35px;
  display: none;

  @media ( max-width: 600px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 18px;
    cursor: pointer;
    z-index: 10;
}

`;






export default Header
