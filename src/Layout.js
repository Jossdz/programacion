import React, { Fragment } from 'react'
import styled from 'styled-components'

import theme from '../theme'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
  padding: 10%;
`

const Footer = styled.footer`
  font-size: 14px;
  color: #232323;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
  border-top: 2px solid #32C3FF;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  span, span > a{
    color: ${theme.colors.text};
  }
`

const Link = styled.a`
  text-decoration: none;
  text-decoration-line: none;
  color: #32C3FF;
  &:visited{
    color: #32C3FF;
  }
  &:hover{
    text-decoration: none;
  }
  
`



const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span><b>IRONHACK</b></span>
      <span><a
      style={{ textDecoration: 'none' }} href='https://jossdz.com' target='_blank'>@JossDz</a></span>
    </Footer>
  </Fragment>
)

export default Layout