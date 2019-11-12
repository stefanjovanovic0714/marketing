// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Shyft',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '9ay0j70ro5tb', // required
        accessToken: '2RTlGqZfd9ByvKX0DGnMEvHff3EZoqsD9kvuTN2danA', // required
        typeName: 'Contentful'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-74112314-21'
      }
    }
  ],
  templates: {
    ContentfulBlogPost: '/blog/:slug',
    ContentfulPress: '/press/:title',
    ContentfulLandingPages: '/:slug',
  },
}
