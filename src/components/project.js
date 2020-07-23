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

  & p {
    max-width: none;
    padding: 2rem 0 2rem 0;
    grid-column: 1/4;
  }

  @media (max-width: 768px) {
    display: block;
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
