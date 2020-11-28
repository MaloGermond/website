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

export default function Playground() {
  return (
    <Sandbox>
      <Gallery></Gallery>
    </Sandbox>
  )
}
