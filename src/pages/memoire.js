import React from "react"
import Layout from "../components/layout.js"
import Cartel from "../components/cartel.js"
import { useStaticQuery, graphql } from "gatsby"

export default function Manifest() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(
        frontmatter: {
          title: { eq: "Pour un regard nouveau sur l'ordinateur" }
        }
      ) {
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
  return (
    <Layout>
      {data.markdownRemark != null ? (
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      ) : (
        "Humm this document looks empty 😶"
      )}
    </Layout>
  )
}
