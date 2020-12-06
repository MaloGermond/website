import React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/project.js"

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
      <Project content={data.markdownRemark} cartel="false"></Project>
    </Layout>
  )
}
