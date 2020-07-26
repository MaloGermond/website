import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Header = styled.header`
  min-height: 90vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 0 2rem 0;
`

const Content = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 720px;
  margin: 2rem auto 2rem auto;
  padding: 0 2rem 0 2rem;

  @media (max-width: 768px) {
    margin: 1rem auto 1rem auto;
    padding: 0 1rem 0 1rem;
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

const Cover = styled.div`
  min-width: 500px;
  height: 100%;
  margin: auto;
  padding: auto 2rem auto 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem 0 1rem;
    min-width: auto;
    width: 100%;
  }

  & img {
    border-radius: 4px;
  }
`

function Cartel({ frontmatter }) {
  if (frontmatter != null) {
    return (
      <Header>
        <Content className="left-skew">
          <Label align="end">Project:</Label>
          <h1>{frontmatter.title}</h1>
          {frontmatter.date ? <Label>Date:</Label> : ""}
          {frontmatter.date ? <p>{frontmatter.date}</p> : ""}
          {frontmatter.description ? <Label>Description:</Label> : ""}
          {frontmatter.description ? <p>{frontmatter.description}</p> : ""}
        </Content>
        {frontmatter.cover ? (
          <Cover className="right-skew">
            <Img fluid={frontmatter.cover.childImageSharp.fluid} />
          </Cover>
        ) : null}
      </Header>
    )
  } else {
    return (
      <div>
        Humm I'm sorry, I'm not able to find data{" "}
        <span role="img" aria-label="magnifying glass">
          🔍
        </span>
        ️
      </div>
    )
  }
}

export default Cartel

//<Img fluid={frontmatter.cover.childImageSharp.fluid}/>
