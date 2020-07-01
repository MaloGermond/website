import React from "react"
import Layout from "../components/layout.js"
import Style from "./index.css"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Home = () => (
  <Layout>
    <section>
      <article>
        <h4>
          Je suis Malo, designer produit basé à Marseille. Spécialisé dans la
          conception d'interfaces, avec un intérêt pour les objets connectés et
          le développement sur le web.
        </h4>
        <h4>
          Je travaille actuellement chez{" "}
          <OutboundLink href=" https://privowny.io/" target="_blank">
            Privowny
          </OutboundLink>{" "}
          pour apporter un moyen plus simple de protéger les données des
          utilisateurs.
        </h4>
        <h4>
          Auparavant, j'ai travaillé à l'
          <OutboundLink href=" http://esadmm.fr/" target="_blank">
            Esadmm
          </OutboundLink>{" "}
          et l'
          <OutboundLink
            href=" https://www.ensci.com/ensci-les-ateliers/"
            target="_blank"
          >
            ensci
          </OutboundLink>{" "}
          comme assistant en design.
        </h4>
      </article>
    </section>
  </Layout>
)

export default Home
