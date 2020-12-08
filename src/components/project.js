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

  .fullWidth {
    grid-column: 1/4;
    width: 100%;
  }

  .gatsby-resp-image-wrapper {
    width: 100%;
    grid-column: 2/3;
  }

  .caption {
    grid-column: 3/4;
    align-self: end;
    font-size: 0.8rem;

    border-left: black;
    border-left-style: solid;
    padding-left: 1rem;
  }

  .galleryCol2 {
    grid-column: 2/3;

    .custom-block-body {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding-top: 1rem;
    }
    span {
      width: calc(50% - 1rem);
      height: 100%;
    }
  }

  .galleryCol3 {
    grid-column: 2/3;

    .custom-block-body {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding-top: 1rem;
      justify-content: center;
    }
    span {
      width: calc(33% - 1rem);
      height: 100%;
    }
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  blockquote {
    max-width: 600px;
    grid-column: 2/3;
  }

  .footnotes {
    grid-column: 3/4;
  }

  & img {
    border-radius: 4px;
  }

  & table {
    max-width: none;
    padding: 2rem 0 2rem 0;
    grid-column: 1/4;
  }

  @media (max-width: 768px) {
    margin: 1rem;

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    blockquote {
      grid-column: 1/4;
    }

    .gatsby-resp-image-wrapper,
    .caption {
      grid-column: 1/4;
    }

    .galleryCol3 span {
      width: 100%;
    }

    .galleryCol2 span {
      width: 100%;
    }
  }
`

export default function Project(props) {
  return (
    <Section>
      {props.cartel != null ? null : (
        <Cartel frontmatter={props.content.frontmatter} />
      )}
      {props.content != null ? (
        <Article
          className="project"
          dangerouslySetInnerHTML={{ __html: props.content.html }}
        />
      ) : (
        "Humm this document looks empty 😶"
      )}
    </Section>
  )
}
