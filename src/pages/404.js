import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"

const Error = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 0;
  }
`

function error() {
  return (
    <Layout>
      <Error>
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
      </Error>
    </Layout>
  )
}

export default error
