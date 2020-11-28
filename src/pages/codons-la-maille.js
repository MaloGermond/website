import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout.js"
import Project from "../components/project.js"

export default function Privowny() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Codons la maille" } }) {
        frontmatter {
          date
          description
          tag
          title
          cover {
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  `)
  return (
    <Layout pathname="/CodonsLaMaille">
      <Project content={data.markdownRemark}></Project>
    </Layout>
  )
}
