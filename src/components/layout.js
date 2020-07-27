import React from "react"
import Footer from "../components/footer.js"
import SEO from "../components/seo.js"
import styled from "styled-components"

const Site = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr;
`
const Content = styled.article``

function Layout({ children, pathname }) {
  return (
    <div>
      <SEO pathname={pathname} />
      <Site>
        <Content>{children}</Content>
        <Footer />
      </Site>
    </div>
  )
}

export default Layout
