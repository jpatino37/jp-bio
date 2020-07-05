import React, { useState } from 'react'
import styled from 'styled-components'
import { MdMenu } from 'react-icons/md'
import logo from '../images/logo.png'

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  height: 80px;
  box-shadow: 0px 1px 1px #d3d3d3;
`

const Logo = styled.img`
  height: 75px;
  width: auto;
`

const Hamburger = styled.button`
  margin: 0 8px;
  border: none;
  width: 60px;

  &:hover {
    background-color: #d6d6d6;
  }

  &:active {
    background-color: #d6d6d6;
    box-shadow: 0 1px black;
    transform: translateY(2px);
  }
`

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false)
  return (
    <Nav>
      <Hamburger type="button" onClick={() => setNavToggle(!navToggle)}>
        <MdMenu size={32} />
      </Hamburger>
      <Logo src={logo} alt="logo" />
    </Nav>
  )
}

export default Navbar
