module.exports = {
  siteMetadata: {
    title: `Greenscape`,
    description: `Greenscape is an open source project mapping the sustainability landscape`,
    author: `@bloudermilk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appgvF8aMalzzIyYx`,
            tableName: `Organizations`,
            tableView: `Published`,
            mapping: { "Logo": `fileNode`, "Published": `boolean` },
            tableLinks: [`Sector`]
          },
          {
            baseId: `appgvF8aMalzzIyYx`,
            tableName: `Sectors`,
            tableView: `Published`,
            mapping: { "Cover": `fileNode` },
            tableLinks: [`Organizations`]
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        defautQuality: 75,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`
  ],
}