import React from "react"
import styles from "./footer.css"
import styled from "styled-components"

const Link = styled.a`
  font-family: "Open sans";
  margin: 0.5rem;
  color: var(--colors-onbackground-low);
`

function Footer() {
  return (
    <footer className="sticky">
      <Link
        href="https://github.com/MaloGermond?tab=repositories"
        target="_blank"
      >
        Github
      </Link>
      <Link href="https://www.linkedin.com/in/malogermond/" target="_blank">
        Linkedin
      </Link>
      <Link href="https://twitter.com/MaloGermond" target="_blank">
        Twitter
      </Link>
      <Link href="http://www.malogermond.net/" target="_blank">
        Old website
      </Link>
    </footer>
  )
}

export default Footer
