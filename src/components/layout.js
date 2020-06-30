import React from "react"
import Footer from "../components/footer.js"
import SEO from "../components/seo.js"

function Layout({ children, pathname }) {
  return (
    <div>
      <SEO pathname={pathname} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
