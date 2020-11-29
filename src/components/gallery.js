import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.section`
  background-color: var(--colors-background-light-light);
  margin-top: 4rem;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  gap: 1rem;
  overflow: scroll;

  @media (max-width: 768px) {
    padding: 1rem;
  }
 `

const Cover = styled.article`
  width: 256px;
  order: ${props => props.order};
  div {
    border-radius: 4px;
  }
  a .gatsby-image-wrapper {
    transition: 0.4s;
  }

  a:hover .gatsby-image-wrapper {
    box-shadow: var(--box-shadow-4);
  }

  @media (max-width: 768px) {
    width: 128px;
  }
`

function Gallery() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { homepage: { eq: true } } }) {
        nodes {
          frontmatter {
            title
            link
            order
            cover {
              childImageSharp {
                fluid(maxHeight: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log({ data })
  return (
    <Container>
      {data.allMarkdownRemark.nodes.map(project => (
        <Cover order={project.frontmatter.order}>
          <Link
            to={project.frontmatter.link}
            target="_blank"
            className="header-link"
          >
            <Img fluid={project.frontmatter.cover.childImageSharp.fluid} />
            <h5>{project.frontmatter.title}</h5>
          </Link>
        </Cover>
      ))}
    </Container>
  )
}

export default Gallery
