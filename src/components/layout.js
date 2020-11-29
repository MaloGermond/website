import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import SEO from "../components/seo.js"
import styled from "styled-components"
import Gallery from "../components/gallery.js"

const Site = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`
const Content = styled.article``

function Layout({ children, pathname }) {
  return (
    <div>
      <SEO pathname={pathname} />
      <Site>
        {pathname !== "/" ? <Header /> : <Header homepage="true" />}
        <Content>{children}</Content>
        <Gallery />
        <Footer />
      </Site>
    </div>
  )
}

export default Layout
