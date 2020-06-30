import React from "react"
import { Helmet } from "react-helmet"

function SEO({ title, lang, pathname }) {
  const canonical = pathname ? `http://malogermond.fr${pathname}` : null
  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang,
      }}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
    ></Helmet>
  )
}

SEO.defaultProps = { title: "Malo Germond", lang: "FR-fr", pathname: "/" }

export default SEO
