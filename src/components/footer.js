import React from "react"
import styles from "./footer.css"
import styled from "styled-components"
import twitter from "../../src/images/Twitter.svg"
import github from "../../src/images/Github.svg"
import linkedin from "../../src/images/Linkedin.svg"

const Link = styled.a`
  font-family: "Open sans";
  margin: 0.5rem;
  color: var(--colors-onbackground-low);
`

function Footer() {
  return (
    <footer class="sticky">
      <Link
        className={styles.link}
        href="https://github.com/MaloGermond?tab=repositories"
        target="_blank"
      >
        <img src={github} alt="github logo"></img>
      </Link>
      <Link
        className={styles.link}
        href="https://www.linkedin.com/in/malogermond/"
        target="_blank"
      >
        <img src={linkedin} alt="linkedin logo"></img>
      </Link>
      <Link
        className={styles.link}
        href="https://twitter.com/MaloGermond"
        target="_blank"
      >
        <img src={twitter} alt="twitter logo"></img>
      </Link>
      <Link
        className={styles.link}
        href="http://www.malogermond.net/"
        target="_blank"
      >
        Old website
      </Link>
    </footer>
  )
}

export default Footer
