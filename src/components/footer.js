import React from "react"
import "./footer.css"
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

const Colophon = styled.div``

function Footer() {
  return (
    <footer>
      <Colophon>
        <Caption>
          Copyright © 2016 - 2020 - All Rights Reserved - Marseille{" "}
        </Caption>
      </Colophon>
      <div className="externalLink">
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
      </div>
    </footer>
  )
}

export default Footer
