import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.section`
  background-color: var(--colors-background-light-light);
  margin-top: 4rem;
  padding: 2rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  box-sizing: border-box;
  gap: 1rem;
  overflow: scroll;
 `

const Cover = styled.article`
  min-width: 256px;

  .gatsby-image-wrapper {
    transition: 0.4s;
    border-radius: 4px;
  }

  a:hover .gatsby-image-wrapper {
    box-shadow: var(--box-shadow-4);
  }
`

function Gallery() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(/projects/)/" } }
      ) {
        nodes {
          frontmatter {
            title
            link
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
        <Cover>
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
