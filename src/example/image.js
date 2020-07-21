import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Box = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  width: 25vw;
  min-width: 150px;
  max-width: 300px;
`

const Sandbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`

export default function Image() {
  return (
    <Sandbox>
      <Placeholder></Placeholder>
      <Placeholder></Placeholder>
      <Placeholder></Placeholder>
      <Placeholder></Placeholder>
      <Placeholder></Placeholder>
      <Placeholder></Placeholder>
      <Placeholder></Placeholder>
      <Placeholder></Placeholder>
    </Sandbox>
  )
}

function Placeholder() {
  const content = useStaticQuery(graphql`
    {
      imageSharp(fixed: { originalName: { eq: "iphone.png" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
        fixed(height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)
  return (
    <Box>
      <Img fluid={content.imageSharp.fluid} draggable="false"></Img>
    </Box>
  )
}
