import React from "react"
import Layout from "../components/layout.js"
import Cartel from "../components/cartel.js"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Article = styled.article`
  & p {
    max-width: none;
    padding: 2rem 0 2rem 0;
  }
`

export default function Project() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "Privowny App" } }) {
        frontmatter {
          date
          description
          tag
          title
        }
        html
      }
    }
  `)
  return (
    <Layout>
      <Cartel frontmatter={data.markdownRemark.frontmatter} />
      {data.markdownRemark != null ? (
        <Article
          className="project"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      ) : (
        "Humm this document looks empty 😶"
      )}
    </Layout>
  )
}
