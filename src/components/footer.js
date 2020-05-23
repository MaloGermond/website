import React from "react"
import styles from "./footer.css"

function Footer() {
  return (
    <footer>
      <a
        className={styles.link}
        href="https://github.com/MaloGermond?tab=repositories"
        target="_blank"
      >
        Github
      </a>
      <a
        className={styles.link}
        href="https://www.linkedin.com/in/malogermond/"
        target="_blank"
      >
        Linkedin
      </a>
      <a
        className={styles.link}
        href="https://twitter.com/MaloGermond"
        target="_blank"
      >
        Twitter
      </a>
    </footer>
  )
}

export default Footer
