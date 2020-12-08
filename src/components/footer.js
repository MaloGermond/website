import React from "react"
import styled from "styled-components"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Button from "../components/button.js"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

const SocialNetwork = styled.div`
  display: flex;
  gap: 0.2rem;
`

const Stack = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 0.5rem;
`

const Container = styled.footer`
  background-color: var(--colors-background-light-light);
  width: 72%;
  max-width: calc(1680px - 28%);
  margin: auto;
  padding: 1rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0 1rem 0;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  a {
    border-style: none;
  }
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`

const LowerContent = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 0rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const TagLine = styled.p`
  max-width: 256px;
`

const ProfilCard = styled.div`
  display: flex;
  .gatsby-image-wrapper {
    width: 64px;
    border-radius: 4px;
    overflow: hidden;
    margin: 1.3rem 1rem 1rem 0rem;
  }
`

function Footer() {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "profil" }) {
        id
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log({ data })
  return (
    <Container>
      <MainContent>
        <ProfilCard>
          <Column>
            <Img fixed={data.file.childImageSharp.fixed} alt="" />
          </Column>
          <Column>
            <h6>Malo Germond</h6>
            <TagLine>
              Designer produit basé à Marseille. Spécialisé dans la conception
              d'interfaces.
            </TagLine>
            <SocialNetwork>
              <Button
                action="https://github.com/MaloGermond?tab=repositories"
                leadingIcon="github"
                ariaLabel="open github"
                style={theme.secondary}
              ></Button>
              <Button
                action="https://www.linkedin.com/in/malogermond/"
                leadingIcon="linkedin"
                ariaLabel="open Linkedin"
                style={theme.secondary}
              ></Button>
              <Button
                action="https://twitter.com/MaloGermond"
                leadingIcon="twitter"
                ariaLabel="open Twitter"
                style={theme.secondary}
              ></Button>
              <Button
                action="mailto:malo.germond@gmail.com"
                leadingIcon="feedback"
                ariaLabel="Send me an email"
                style={theme.secondary}
              ></Button>
            </SocialNetwork>
          </Column>
        </ProfilCard>

        <Stack>
          <Column>
            <h6>Projet</h6>

            <Link to="/privowny">Privowny App</Link>

            <Link to="/label-fukushima">Label Fukushima</Link>

            <Link to="/Codons-la-maille">Codons la maille</Link>
          </Column>
          <Column>
            <h6>À propos</h6>
            <Link to="/legal-mention">Mentions légales</Link>
          </Column>
        </Stack>
      </MainContent>
      <LowerContent>
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
      </LowerContent>
    </Container>
  )
}

export default Footer
