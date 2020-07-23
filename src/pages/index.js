import React from "react"
import Layout from "../components/layout.js"
import "./index.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styled from "styled-components"
import { Link } from "gatsby"

const Presentation = styled.article`
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  max-width: 650px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
`

const Home = () => (
  <Layout>
    <Presentation className="left-skew">
      <h4>
        Je suis Malo, designer produit basé à Marseille. Spécialisé dans la
        conception d'interfaces, avec un intérêt pour les objets connectés et le
        développement sur le web.
      </h4>
      <h4>
        {"Je travaille actuellement chez"}
        <Link to="privowny" target="_blank" class="header-link">
          Privowny
        </Link>
        pour apporter un moyen plus simple de protéger les données des
        utilisateurs.
      </h4>
      <h4>
        {"Auparavant, j'ai travaillé à l'"}
        <OutboundLink
          href=" http://esadmm.fr/"
          target="_blank"
          class="header-link"
        >
          Esadmm
        </OutboundLink>
        {"et l'"}
        <OutboundLink
          href=" https://www.ensci.com/ensci-les-ateliers/"
          target="_blank"
          class="header-link"
        >
          ensci
        </OutboundLink>
        {"comme assistant d'enseignement en design."}
      </h4>
    </Presentation>
  </Layout>
)

export default Home
