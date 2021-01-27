// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Chrissie Muhorakeye",
  siteDescription:
    "Front-end web developer and user interface designer writing about front-end development, accessibility, UI design, and more.",
  siteUrl: "https:/www.chrissie.netlify.app/",
  metadata: {
    author: "Chrissie Muhorakeye",
    twitter: "@chrissiemhrk",
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/posts/**/*.md",
        typeName: "Post",
        route: "/writing/:title",
        remark: {
          plugins: [
            ["@gridsome/remark-prismjs", { transformInlineCode: true }],
          ],
        },
      },
    },
  ],
};
