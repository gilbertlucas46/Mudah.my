import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import logo from '../img/icons/logo.svg';
import menu from '../img/icons/menu-button.svg';

const navitems = [
  { title: 'Categories' },
  { title: 'Notification' },
  { title: 'Login/Sign up' },
  { title: 'Help' },

];

const Nav = styled.nav`
  width:100%;
  ul {
    list-style: none;
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    padding: 0;
    @media (min-width:1200px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between; 
    }
    li {
      list-style-type:none;
      /* iPad in portrait & landscape */
      @media only screen 
      and (min-device-width : 768px) 
      and (max-device-width : 1024px)  { 
        margin-bottom:3rem;
      }
      a {
        position:relative;
        text-decoration: none;
        color: #333333;
        font-size: 1rem;
      }
    }
    @media (max-width:1199px) {
      text-align:center;
      li {
        margin-bottom:2.5rem;
        a {
          line-height: 3rem;
          font-size: 1.4rem;
        }
      }
    }
  }
`;

const NavWrapper = styled.div`
  position:relative;
  overflow:hidden;
  min-height:80px;
  @media (max-width:1199px){
    padding-right:0 !important;
  }
  @media (min-width:1551px) {
    display: grid;
    grid-template-columns: 1fr 3fr; 
  }
  @media (min-width:1200px) and (max-width:1550px) {
    grid-template-columns: 2fr 6fr; 
    display: grid;
  }
  .App-logo {
    position: relative;
    overflow: hidden;
    display: block;
    height: 80px;
    img {
      max-width: 140px;
      margin: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 2rem;
      margin: auto;
    }
    @media (min-width:1200px) {
      display: flex;           /* establish flex container */
      flex-direction: column;  /* make main axis vertical */
      justify-content: center; /* center items vertically, in this case */
      align-items: center; 
    }
  }
  .MainNav {
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center; 
    position:relative;
    overflow:hidden;
    width: 100%;
    @media (min-width:1200px) {
      transform: none !important;
      max-width: 600px;
    }
    @media (max-width:1199px){
      position: fixed;  
      height: 100vh;
      z-index: 999;
      background-color: white;
      width: 100%;
      left: 0;
      top: 0;
    }
  }
  .menu-button {
    position: absolute;
    right: 2rem;
    top: 0;
    bottom: 0;
    z-index: 999;
    color:white;
    background-color: transparent;
    border: 0;
    outline: none;
    @media (min-width:1200px) {
      display: none;
    }
  }
  .mobileMenu {
    max-height: 42px;
    max-width: 42px;
    margin: auto;
  }
`;

const Header = styled.header`
  position: fixed;
  top:0;
  width: 100%;
  z-index:99;
  background-color: white;
  box-shadow: #0000004a 0 3px 6px;
`;

const Navigation = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)',
  });
  return (
    <Header className="App-header">
      <NavWrapper>
        <Link to="/" className="App-logo">
          <img src={logo} alt="logo" />
        </Link>
        <animated.div className="MainNav" style={navAnimation}>
          <Nav>
            <ul>
              {navitems.map(nav => (
                <li key={nav.title}>
                  <Link
                    to={`?${'nav'.title}`} /* I did not create dummy landing pages for these links */
                    aria-label={`links to ${nav.title}`}
                    alt={nav.title}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Nav>
        </animated.div>
        <button type="button" onClick={() => setNavOpen(!isNavOpen)} className="menu-button">
          <img src={menu} className="mobileMenu" alt="menu" />
        </button>
      </NavWrapper>
    </Header>
  );
};

export default Navigation;
