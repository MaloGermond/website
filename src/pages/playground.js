import React from "react"
import styled from "styled-components"
import Button from "../components/button.js"

const Sandbox = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--colors-surface-100);
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
`

const List = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default function Playground() {
  return (
    <Sandbox>
      <List>
        <Button trailingIcon="question"></Button>
        <Button>Contact me</Button>
        <Button trailingIcon="right">Malo Germond</Button>
        <Button to="/" trailingIcon="right" leadingIcon="down">
          Choose an option
        </Button>
        <Button leadingIcon="down">Wich data</Button>
      </List>
    </Sandbox>
  )
}
