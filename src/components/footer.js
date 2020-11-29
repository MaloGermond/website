import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Button from "../components/button.js"

const theme = {
  primary: {
    enabled: "--colors-primary-200",
    hovered: "--colors-primary-400",
    focused: "--colors-primary-400",
    actived: "--colors-primary-500",
  },
  secondary: {
    enabled: "--colors-surface-050",
    hovered: "--colors-surface-200",
    focused: "--colors-surface-200",
    actived: "--colors-surface-400",
  },
}

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
  background-color: var(--colors-background-light-light);
  margin-top: 4rem;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`
const FullWidth = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
      </SocialNetwork>
      <FullWidth>
        <Button
          action="mailto:malo.germond@gmail.com"
          ariaLabel="Me contacter"
          style={theme.secondary}
        >
          Me contacter
        </Button>
      </FullWidth>
    </Container>
  )
}

export default Footer
