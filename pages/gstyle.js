import React from 'react'
import glamorous from 'glamorous'

const MyStyledDiv = glamorous.div({
  fontSize: 20,
  textAlign: 'center',
  color: 'red',
})

const { Div } = glamorous

const Mystyle = () => (
  <MyStyledDiv>
    <h2>Glamorous styling</h2>
    <Div color="blue">Blue da bee dooooo</Div>
  </MyStyledDiv>
)

export default Mystyle
