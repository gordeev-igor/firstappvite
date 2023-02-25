
import './App.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Footer() {

  return (
    <FooterBot>
      <FooterInner>
        <Logo>
          <Link to="/">
            <LogoImg src="logo.svg" alt="logo" />
          </Link>
        </Logo>
        <MenuListF>
          <MenuLi>
            <Link className="link__page-f" to="/">
              Home
            </Link>
          </MenuLi>
          <MenuLi>
            <Link className="link__page-f" to="/about">
              About
            </Link>
          </MenuLi>
        </MenuListF>
      </FooterInner>
    </FooterBot>
  )
}

const FooterBot = styled.div`
  display: flex;
  width: 100%;
  background-color: #F4F4F9;
  min-height: 72px;
  height: fit-content;
  padding: 18px;


`;


const FooterInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;

  }
`;

const Logo = styled.div`
`;

// const LogoLink = styled.a`
// `;


const LogoImg = styled.img`
`;


const MenuListF = styled.ul`
  display: flex;
  gap: 50px;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

  }
`;


const MenuLi = styled.li`
`;



export default Footer
