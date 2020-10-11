import React from "react"
import styled from "styled-components"
import Button from "../components/button.js"
import Input from "../components/input.js"

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

const List = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  width: 512px;
`

export default function Playground() {
  return (
    <Sandbox>
      <List>
        <Input label="Email" placeholder="me@address.com" type="email"></Input>
        <Button>Envoyer</Button>
      </List>
    </Sandbox>
  )
}

const Wrapper = styled.Label``

function TextArea() {
  return <Wrapper></Wrapper>
}
