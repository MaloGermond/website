import React from "react"
import Footer from "../components/footer.js"
import Style from "./index.css"

const Home = () => (
  <div>
    <section>
      <article>
        <h4>
          Je suis Malo, designer produit / numériques basé à Marseille.
          Spécialisé dans la conception d'interfaces, avec un intérêt pour les
          objets connecté et le développement sur le web.
        </h4>
        <h4>
          Je travaille actuellement chez{" "}
          <a href=" https://privowny.io/" target="_blank">
            Privowny
          </a>{" "}
          pour apporter un moyen plus simple de protéger les données des
          utilisateurs.
        </h4>
        <h4>
          Auparavant, j'ai travaillé à l'
          <a href=" http://esadmm.fr/" target="_blank">
            Esadmm
          </a>{" "}
          et l'
          <a href=" https://www.ensci.com/ensci-les-ateliers/" target="_blank">
            ensci
          </a>{" "}
          comme assistant en design.
        </h4>
      </article>
    </section>
    <Footer></Footer>
  </div>
)

export default Home
