/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/website",
  plugins: [
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Malo Germond Designer UI`,
        short_name: `Malo Germond`,
        description: `Je suis designer
        J’utilise sketch pour mes interfaces et illustrator pour mes illustrations.
        Je code en Javascript pour à peu près tout (React, NodeJS) et Processing pour mes maquettes.
        Je modélise sous Rhino pour l’industriel et sous Blender pour faire des rendus 3D.
        J’aime dessiner avec mes crayons ;)`,
        lang: `fr`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f98686`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
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
