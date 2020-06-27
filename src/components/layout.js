import React from "react"
import Footer from "../components/footer.js"
import SEO from "../components/seo.js"

function Layout({ children }) {
  return (
    <div>
      <SEO />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
