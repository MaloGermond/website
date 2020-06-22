import React from "react"
import Footer from "../components/footer.js"

function Layout({ children }) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
