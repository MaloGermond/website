import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Caption = styled.p`
  font-size: 0.8rem;
  color: var(--colors-onlight-high);
  text-align: center;
`

const Icon = styled.i`
  font-size: 32px;
  color: var(--colors-onlight-low);
  transition: 0.3s;

  &:hover {
    color: var(--colors-onlight-height);
  }
`

const SocialNetwork = styled.div`
  display: flex;
  padding: 1rem;
  gap: 0.5rem;

  & a {
    border-bottom-style: none;
  }
`

const Colophon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.footer`
  background-color: var(--colors-background-light-medium);
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`

function Footer() {
  return (
    <Container>
      <Colophon>
        <Caption>
          Copyright © 2016 - 2020 - All Rights Reserved - Marseille{" "}
        </Caption>
        <Caption>
          Thanks to{" "}
          <OutboundLink href="https://www.gatsbyjs.org/" target="_blank">
            Gatsby{" "}
          </OutboundLink>
          community for this awsome tool{" "}
          <span aria-label="rocket icons" role="img">
            🚀
          </span>{" "}
        </Caption>
      </Colophon>
      <SocialNetwork>
        <OutboundLink
          href="https://github.com/MaloGermond?tab=repositories"
          target="_blank"
          aria-label="github logo"
        >
          <Icon className="icon-github"></Icon>
        </OutboundLink>
        <OutboundLink
          href="https://www.linkedin.com/in/malogermond/"
          target="_blank"
          aria-label="Linkedin logo"
        >
          <Icon className="icon-linkedin"></Icon>
        </OutboundLink>
        <OutboundLink
          href="https://twitter.com/MaloGermond"
          target="_blank"
          aria-label="Twitter logo"
        >
          <Icon className="icon-twitter"></Icon>
        </OutboundLink>
        <OutboundLink
          href="http://www.malogermond.net/"
          target="_blank"
          aria-label="My old website logo"
        >
          <Icon className="icon-website"></Icon>
        </OutboundLink>
      </SocialNetwork>
    </Container>
  )
}

export default Footer
