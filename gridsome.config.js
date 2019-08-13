const config = require("./src/assets/content/data/config.json")
const infoData = require("./src/assets/content/data/info.json")

module.exports = {
  metaData: {
    siteName: config.title,
    siteDescription: config.description,
    infoData: infoData, 
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        baseDir: "./src/assets/content/",
        path: 'blog/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ]
}



// {
//   use: '@gridsome/source-filesystem',
//   options: {
//     typeName: 'Blog',
//     path: 'src/assets/content/blog/**/*.md',
//     route: '/blog/:slug',
//     resolveAbsolutePaths: true,
//     remark: {
//       externalLinksTarget: "_blank",
//       externalLinksRel: ["nofollow", "noopener", "noreferrer"]
//     }
//   }
// }
// ], 
// transformers:{
// remark: {
  
// }
// }


// {
//   use: '@gridsome/source-filesystem',
//   options: {
//     typeName: 'Blog',
//     baseDir: './content/blog',
//     pathPrefix: '/blog',
//     path: '*.md',
//     route: '/blog/:slug',
//     resolveAbsolutePaths: true,
//     remark: {
//       externalLinksTarget: "_blank",
//       externalLinksRel: ["nofollow", "noopener", "noreferrer"]
//     }
//   }
// }
