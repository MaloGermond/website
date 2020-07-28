import React from "react"
import styled from "styled-components"
import Button from "../components/button.js"

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2rem;
  height: max-content;
  z-index: 1;
  background: var(--colors-background-light-low);
  width: 100%;
  box-sizing: border-box;
`

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default function Header({ homepage }) {
  return (
    <Container>
      {homepage ? (
        <Button
          to="/"
          background="--colors-surface-050"
          hovered="--colors-surface-200"
          focused="--colors-surface-200"
          actived="--colors-surface-900"
        >
          Malo Germond
        </Button>
      ) : (
        <Button
          to="/"
          trailingIcon="left"
          background="--colors-surface-050"
          hovered="--colors-surface-200"
          focused="--colors-surface-200"
          actived="--colors-surface-900"
        >
          Page d'accueil
        </Button>
      )}
      <List>
        <Button
          to="/privowny"
          background="--colors-surface-050"
          hovered="--colors-surface-200"
          focused="--colors-surface-200"
          actived="--colors-surface-900"
        >
          Privowny App
        </Button>
        <Button>Contact me</Button>
      </List>
    </Container>
  )
}
