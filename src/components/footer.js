import React from "react"
import styles from "./footer.css"
import styled from "styled-components"
import Twitter from "../../src/assets/Twitter.svg"
import Github from "../../src/assets/Github.svg"
import Linkedin from "../../src/assets/Linkedin.svg"
import Oldwebsite from "../../src/assets/Oldwebsite.svg"

const Link = styled.a`
  font-family: "Open sans";
  margin: 0.5rem;
  color: var(--colors-onbackground-low);
`

const Caption = styled.p`
  font-size: 0.8rem;
  color: var(--colors-onbackground-low);
  align-self: center;
`

function Footer() {
  return (
    <footer class="sticky">
      <Caption>
        Copyright © 2016 - 2020 - All Rights Reserved - Marseille{" "}
      </Caption>
      <div class="link">
        <Link
          className={styles.link}
          href="https://github.com/MaloGermond?tab=repositories"
          target="_blank"
          alt="github logo"
        >
          <Github />
        </Link>
        <Link
          className={styles.link}
          href="https://www.linkedin.com/in/malogermond/"
          target="_blank"
          alt="Linkedin logo"
        >
          <Linkedin />
        </Link>
        <Link
          className={styles.link}
          href="https://twitter.com/MaloGermond"
          target="_blank"
          alt="Twitter logo"
        >
          <Twitter />
        </Link>
        <Link
          className={styles.link}
          href="http://www.malogermond.net/"
          target="_blank"
          alt="My old website logo"
        >
          <Oldwebsite />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
