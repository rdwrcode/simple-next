import React from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
  ${{
    fontsize: '30px',
    color: 'green',
    '@media screen and (min-width: 22em)': {
      color: 'blue',
      fontsize: '50px',
    },
  }}
`

const Hello = () => <MyDiv>Hello object</MyDiv>

export default Hello
