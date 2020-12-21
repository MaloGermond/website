import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Container = styled.section`
  background-color: var(--colors-background-light-light);
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    justify-content: left;
    flex-wrap: wrap;
  }
 `

const Cover = styled.article`
  width: 256px;
  order: ${props => props.order};
  flex-shrink: 0;

  div {
    border-radius: 4px;
  }
  a .gatsby-image-wrapper {
    transition: 0.4s;
    transition-timing-function: ease-in-out;
  }

  a:hover div {
    transform: scale(1.02);
  }

  a:hover .gatsby-image-wrapper {
    box-shadow: var(--box-shadow-4);
  }

  @media (max-width: 768px) {
    width: 100%;

    a {
      display: flex;
      border-bottom: none;
      align-items: end;
    }

    a .gatsby-image-wrapper {
      width: 8rem;
      margin-right: 1rem;
    }
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
            priority
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
  return (
    <Container>
      {data.allMarkdownRemark.nodes.map((project, id) => (
        <Cover
          order={project.frontmatter.priority}
          data-sal="fade"
          data-sal-duration="1000"
          data-sal-delay={String(200 * project.frontmatter.priority)}
          data-sal-easing="ease-in-out"
        >
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
