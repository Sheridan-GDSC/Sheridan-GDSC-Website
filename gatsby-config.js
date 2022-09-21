module.exports = {
  siteMetadata: {
    siteUrl: "https://www.sheridangdsc.ca",
    title: "SheridanGDSC",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "static/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `event-cards`,
        path: `${__dirname}/src/event-cards/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'content',
        path: `${__dirname}/src/services`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,400,400i,700`, `poppins\:300,400,400i,700`],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-D9C960VDH8", // Google Analytics Tracking ID
        ],
        gtagConfig: {
          // anonymize user IP, required by law in some countries
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
      pluginConfig: {
        // determines if tracking script is found in head or body
        head: false,
        // toggle tracking users with "Do Not Track" enabled
        respectDNT: true,
        // avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
  ],
};
