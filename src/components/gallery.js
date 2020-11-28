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

  img {
    border-radius: 4px;
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
        <div>
          <Link
            to={project.frontmatter.link}
            target="_blank"
            className="header-link"
          >
            <Img fluid={project.frontmatter.cover.childImageSharp.fluid} />
            <h6>{project.frontmatter.title}</h6>
          </Link>
        </div>
      ))}
    </Container>
  )
}

export default Gallery
