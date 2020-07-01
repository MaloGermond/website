import React from "react"
import Footer from "../components/footer.js"
import SEO from "../components/seo.js"
import styled from "styled-components"

const Site = styled.div`
  display: grid;
`
const Content = styled.article`
  min-height: calc(100vh - 8.5rem);
`

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
