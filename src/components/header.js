import React, { useState, useEffect } from "react"
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
  position: sticky;
  top: 0;
  transition: 1s;

	&[data-active='true'] {
		box-shadow: 0 4px 5px 0 rgba(34,46,60,0.07), 0 1px 10px 0 rgba(34,46,60,0.12), 0 2px 4px -1px rgba(34,46,60,0.20);

  }

  }
`

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default function Header({ homepage }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <Container data-active={scrolled}>
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
