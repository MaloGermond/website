/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Malo Germond`,
    description: `Je suis designer
    J’utilise sketch pour mes interfaces et illustrator pour mes illustrations.
    Je code en Javascript pour à peu près tout (React, NodeJS) et Processing pour mes maquettes.
    Je modélise sous Rhino pour l’industriel et sous Blender pour faire des rendus 3D.
    J’aime dessiner avec mes crayons ;)`,
    author: `Malo Germond`,
    keywords: `Design, UI, UX, Marseille, Freelance, Webdesign, Visual, Digital, Numerique, Designer, Design system, Motion`,
    siteUrl: `https://malogermond.fr`,
    icon: `src/assets/favicon.png`,
  },
  /* Your site config here */
  pathPrefix: "/website",
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      // use to load svg
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1920, linkImagesToOriginal: false },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-82648652-1",
      },
    },
  ],
}

/*

{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Malo Germond Designer UI`,
    short_name: `Malo Germond`,
    description: `Je suis designer
    J’utilise sketch pour mes interfaces et illustrator pour mes illustrations.
    Je code en Javascript pour à peu près tout (React, NodeJS) et Processing pour mes maquettes.
    Je modélise sous Rhino pour l’industriel et sous Blender pour faire des rendus 3D.
    J’aime dessiner avec mes crayons ;)`,
    lang: `FR-fr`,
    start_url: `/`,
    background_color: `#fff`,
    theme_color: `#f98686`,
    // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    display: `standalone`,
    icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
  },
},
*/
