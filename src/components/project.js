import React from "react"
import Cartel from "../components/cartel.js"
import styled from "styled-components"

const Section = styled.section`
  display: block;
  max-width: 1536px;
  margin: auto;
`

const Article = styled.article`
  display: grid;
  grid-template-columns: 1rem 1fr 1fr 1fr 1fr 1fr 1rem;
  gap: 1rem;

  .fullWidth {
    grid-column: 1/8;
    width: 100%;
    border-raius: 0;
  }

  .leftAlign {
    grid-column: 3 / span 2;
  }

  .rightAlign {
    grid-column: 4 / span 2;
  }

  .overlapTop {
    transform: translate(0, -4rem);
    z-index: 1;
  }

  .overlapBottom {
    transform: translate(0, 4rem);
    z-index: 1;
  }

  .gatsby-resp-image-wrapper {
    width: 100%;
    grid-column: 3/6;
    z-index: 0;
  }

  .caption {
    grid-column: 6/7;
    align-self: end;
    font-size: 0.8rem;

    border-left: black;
    border-left-style: solid;
    padding-left: 1rem;
  }

  .galleryCol2 {
    grid-column: 3/6;

    .custom-block-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    span {
      width: 100%;
      grid-column: auto;
    }
  }

  .galleryCol3 {
    grid-column: 3/6;

    .custom-block-body {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
    }
    span {
      width: 100%;
      grid-column: auto;
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
    grid-column: 3/6;
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
    grid-template-columns: 1fr;
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
      grid-column: 1;
    }

    .fullWidth {
      grid-column: 1;
    }

    .gatsby-resp-image-wrapper,
    .caption,
    .galleryCol2,
    .galleryCol3 {
      grid-column: 1;
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
