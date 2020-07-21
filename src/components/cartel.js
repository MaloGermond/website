import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Header = styled.header`
  text-align: left;
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 720px;
  margin: 2rem;

  @media (max-width: 768px) {
    margin: 1rem;
    display: block;
  }
`

const Label = styled.p`
  text-align: right;
  color: var(--colors-onlight-low);
  padding-right: 1rem;
  align-self: ${props => props.align || "baseline"};

  @media (max-width: 768px) {
    text-align: left;
    padding-bottom: 0;
  }
`

function Cartel({ frontmatter }) {
  if (frontmatter != null) {
    return (
      <div class="left-skew">
        {
          <Header>
            <Label align="end">Project:</Label>
            <h1>{frontmatter.title}</h1>
            <Label>Date:</Label>
            <p>{frontmatter.date}</p>
            <Label>Description:</Label>
            <p>{frontmatter.description}</p>
          </Header>
        }
      </div>
    )
  } else {
    return <div>Humm I'm sorry, I'm not able to find data 🔍️</div>
  }
}

export default Cartel
