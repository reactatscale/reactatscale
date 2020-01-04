const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/peterkellneradmin/Documents/reactatscale/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/peterkellneradmin/Documents/reactatscale/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/peterkellneradmin/Documents/reactatscale/src/pages/index.js")))
}

