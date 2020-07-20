import React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql } from "gatsby"

export default function Manifest() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Manifest" } }) {
        frontmatter {
          date
          description
          tag
          title
        }
        htmlAst
        html
      }
    }
  `)
  console.log(data.markdownRemark.htmlAst)
  return (
    <Layout>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </Layout>
  )
}
