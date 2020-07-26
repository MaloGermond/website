import React from "react"
import "./footer.css"
import styled from "styled-components"
import Twitter from "../../src/assets/Twitter.svg"
import Github from "../../src/assets/Github.svg"
import Linkedin from "../../src/assets/Linkedin.svg"
import Oldwebsite from "../../src/assets/Oldwebsite.svg"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Caption = styled.p`
  font-size: 0.8rem;
  color: var(--colors-onlight-high);
  text-align: center;
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
          <Github />
        </OutboundLink>
        <OutboundLink
          href="https://www.linkedin.com/in/malogermond/"
          target="_blank"
          aria-label="Linkedin logo"
        >
          <Linkedin />
        </OutboundLink>
        <OutboundLink
          href="https://twitter.com/MaloGermond"
          target="_blank"
          aria-label="Twitter logo"
        >
          <Twitter />
        </OutboundLink>
        <OutboundLink
          href="http://www.malogermond.net/"
          target="_blank"
          aria-label="My old website logo"
        >
          <Oldwebsite />
        </OutboundLink>
      </div>
    </footer>
  )
}

export default Footer
