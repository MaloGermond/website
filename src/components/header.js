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

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &[data-active="true"] {
    box-shadow: 0 4px 5px 0 rgba(34, 46, 60, 0.07),
      0 1px 10px 0 rgba(34, 46, 60, 0.12), 0 2px 4px -1px rgba(34, 46, 60, 0.2);
  }
`

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export default function Header({ homepage }) {
  const [scrolled, setScrolled] = useState(false)
  const [display, setDisplay] = useState(true)

  const theme = {
    primary: {
      enabled: "--colors-primary-200",
      hovered: "--colors-primary-400",
      focused: "--colors-primary-400",
      actived: "--colors-primary-500",
    },
    secondary: {
      enabled: "--colors-surface-050",
      hovered: "--colors-surface-200",
      focused: "--colors-surface-200",
      actived: "--colors-surface-400",
    },
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    function handleResize() {
      if (window.screen.width < 768) {
        setDisplay(false)
      } else {
        setDisplay(true)
      }
    }
    handleResize()
    document.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize, { passive: true })
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <Container data-active={scrolled}>
      {homepage ? (
        <Button to="/" style={theme.secondary} ariaLabel="Open homepage">
          Malo Germond
        </Button>
      ) : (
        <Button
          to="/"
          trailingIcon="left"
          ariaLabel="Open homepage"
          style={theme.secondary}
        >
          {display ? "Page d'accueil" : ""}
        </Button>
      )}
      <List>
        {display ? (
          <List>
            <Button
              to="/privowny"
              ariaLabel="Open Privowny App project"
              style={theme.secondary}
            >
              Privowny App
            </Button>
            <Button
              to="/label-fukushima"
              ariaLabel="Open Label fukushima project"
              style={theme.secondary}
            >
              Label Fukushima
            </Button>
            <Button
              to="/codons-la-maille"
              ariaLabel="Open Codons la maille project"
              style={theme.secondary}
            >
              Codons la maille
            </Button>
          </List>
        ) : (
          ""
        )}
        <Button
          aria-label="Send me an email"
          mail={"mailto:malo.germond@gmail.com"}
        >
          Contact me
        </Button>
      </List>
    </Container>
  )
}
