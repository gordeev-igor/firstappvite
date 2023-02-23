
import './App.css'
import styled from 'styled-components';



function Header() {

  return (
    <HeaderTop>
      <HeaderInner>
        <Logo>
          <LogoLink href="#">
            <LogoImg src="logo.svg" alt="logo" />
          </LogoLink>
        </Logo>
        <Menu>
          <MenuList>

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
`;

const MenuLink = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 19px;
  color: #000000;
`;

const MenuLi = styled.li`
  /* margin-left: 100px; */
`;





export default Header
