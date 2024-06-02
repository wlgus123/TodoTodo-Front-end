import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../Style/styles";
import { ReactComponent as Menu } from "../img/Menu.svg";
import { ReactComponent as Logo } from "../img/Logo.svg";
import { ReactComponent as User } from "../img/User.svg";

function Navbar() {
  return (
    <NavbarContainer>
      <GlobalStyle />
      <NavbarLogo>
        <a href="/"> {/* navbar left */}
          <Logo />
        </a>
      </NavbarLogo>
      <NavbarRightContainer>
        <NavbarRight> {/* navbar right */}
          <Menu />
        </NavbarRight>
        <NavbarRight>
          <User />
        </NavbarRight>
      </NavbarRightContainer>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;

  background-color: white;
  box-shadow: 0px 1px 10px 0px #cccccc;
  
  height: 4em;
`;

const NavbarLogo = styled.div`
  text-align: left;
  margin-left: 4vmin;
  line-height: 6.13em;

  @media screen and (max-width: 600px) {
    * {
      width: 9.45em;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1020px) {
    * {
      width: 9.6em;
    }
  }

  @media screen and (min-width: 1020px) {
    * {
      width: 9.8em;
    }
  }
`;

const NavbarRightContainer = styled.div`
  display: flex;
  margin-left: auto;
  width: 17vmin;
`;

const NavbarRight = styled.div`
  cursor: pointer;
  margin:auto;

  @media screen and (max-width: 600px) {
    * {
      width: 1.55em;
    }
  }
    
  @media screen and (min-width: 600px) and (max-width: 1020px) {
    * {
      width: 1.65em;
    }
  }
    
  @media screen and (min-width: 1020px) {
    * {
      width: 1.75em;
    }
  }
`;