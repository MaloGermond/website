import React from "react"
import styles from "./error.css"
import { Link } from "gatsby"

function error() {
  return (
    <section>
      <article>
        <h3>Oups... 🙏</h3>
        <h1>404</h1>
        <p>
          Bon soit là page n'existe pas... soit il se passe un truc louche...
        </p>
        <Link>Retour à la page principale.</Link>
      </article>
    </section>
  )
}

export default error
