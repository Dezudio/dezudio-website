module.exports = {
  siteMetadata: {
    title: "Dezudio",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ["Benton Mod Disp Bd",
                     "Benton Mod Text Rom",
                     "Benton Sans Cond Lt",
                     "Benton Sans Cond Bk",
                     "Benton Sans Cond Reg",
                     "Benton Sans Cond Bd",
                     "Benton Sans Bk",
                     "Benton Sans Reg",
                     "Benton Sans Bd",
                     "Benton Sans Bla",
                    ],
          urls: ['//cloud.typenetwork.com/projects/5808/fontface.css']
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
