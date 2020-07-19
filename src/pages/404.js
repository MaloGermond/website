import React from "react"
import { Link } from "gatsby"

function error() {
  return (
    <section>
      <article>
        <h3>
          Oups...{" "}
          <span role="img" aria-label="Pardon pour l'erreur">
            🙏
          </span>
        </h3>
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
