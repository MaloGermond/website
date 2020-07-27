import React from "react"
import Layout from "../components/layout.js"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import styled from "styled-components"
import { Link } from "gatsby"

const Presentation = styled.article`
  margin: 2rem auto 2rem auto;
  max-width: 650px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 1rem;
  }
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
        {"Je travaille actuellement chez "}
        <Link to="privowny" target="_blank" className="header-link">
          Privowny
        </Link>{" "}
        pour apporter un moyen plus simple de protéger les données des
        utilisateurs.
      </h4>
      <h4>
        {"Auparavant, j'ai travaillé à l'"}
        <OutboundLink
          href=" http://esadmm.fr/"
          target="_blank"
          className="header-link"
        >
          Esadmm
        </OutboundLink>
        {" et l'"}
        <OutboundLink
          href=" https://www.ensci.com/ensci-les-ateliers/"
          target="_blank"
          className="header-link"
        >
          ensci
        </OutboundLink>
        {" comme assistant d'enseignement en design."}
      </h4>
    </Presentation>
  </Layout>
)

export default Home
