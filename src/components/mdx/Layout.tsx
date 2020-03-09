import React, { FC } from 'react'
import styled from 'styled-components'

const Layout: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) =>
  console.log('HELLO') || <Container>{children}</Container>

export default Layout

const Container = styled.div`
  background-color: red !important;
`
