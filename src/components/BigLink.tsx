import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled(Link)`
  text-decoration: none;
  box-shadow: 0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #b3b3b3;
  padding: 0.5rem 1rem;
  color: ${({ theme: { black } }) => black};
  transition: ease-in-out 0.1s box-shadow;
  &:hover {
    box-shadow: 0 0.2px 0 0 #ffffff inset, 0 0.5px 1px 0 #b3b3b3;
  }
  background-color: ${({ theme: { white } }) => white};
  display: flex;
  align-items: center;
`

const BigLink: FC<{ children: JSX.Element | string; to: string }> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>
}

export default BigLink
