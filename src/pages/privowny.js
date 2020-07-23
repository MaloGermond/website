import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"
import Project from "../components/project.js"

export default function Privowny() {
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
      <Project content={data.markdownRemark}></Project>
    </Layout>
  )
}
