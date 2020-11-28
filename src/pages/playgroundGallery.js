import React from "react"
import styled from "styled-components"
import Gallery from "../components/gallery.js"

const Sandbox = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--colors-surface-050);
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
        <Gallery></Gallery>
      </List>
    </Sandbox>
  )
}
