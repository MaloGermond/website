import React from "react"
import Layout from "../components/layout.js"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../components/project.js"

export default function LegalMention() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Mention legal" } }) {
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
    <Layout pathname="/mention-legal">
      <Project content={data.markdownRemark} cartel="false"></Project>
    </Layout>
  )
}
