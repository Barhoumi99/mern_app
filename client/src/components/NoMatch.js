import React from 'react'
import { styled } from 'styled-components'

const NoMatch = () => {
  return (
    <NoMatchStyled>
      <h2>Page not Found</h2>
    </NoMatchStyled>
  )
}

const NoMatchStyled = styled.div`
  text-align: center;
  color: black;
`;
export default NoMatch