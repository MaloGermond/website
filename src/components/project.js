import React from "react"
import Cartel from "../components/cartel.js"
import styled from "styled-components"

const Section = styled.section`
  display: block;
`

const Article = styled.article`
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  gap: 1rem;
  margin: 2rem;

  .full-width {
    grid-column: 1/4;
  }

  .gatsby-resp-image-wrapper {
    width: 100%;
    grid-column: 2/3;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 1rem;
  }

  .col-2 span {
    width: calc(50% - 1rem);
    height: 100%;
  }

  .col-3 span {
    width: calc(33% - 1rem);
    height: 100%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    max-width: 600px;
    grid-column: 2/3;
  }

  & img {
    border-radius: 4px;
  }

  & a {
    border-style: none;
  }

  & table {
    max-width: none;
    padding: 2rem 0 2rem 0;
    grid-column: 1/4;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 1rem;

    .gallery span {
      width: 100%;
    }
  }
`

export default function Project(content) {
  content = content.content
  return (
    <Section>
      <Cartel frontmatter={content.frontmatter} />
      {content != null ? (
        <Article
          className="project"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      ) : (
        "Humm this document looks empty 😶"
      )}
    </Section>
  )
}
