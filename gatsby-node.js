const path = require("path")
const { paginate } = require('gatsby-awesome-pagination')
const slugify = require('slugify')

// * Generate slug per post
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// * Generate page per post
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const postTemplate = path.resolve('./src/templates/post/post.js')
    const res = await graphql(`
        query {
            allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter { postDate }
                    }
                }
            }
        }
    `)

    paginate({
        createPage,
        items: res.data.allMarkdownRemark.edges,
        itemsPerPage: 5,
        pathPrefix: '/posts',
        component: path.resolve('src/templates/posts/posts.js')
    })

    const posts = res.data.allMarkdownRemark.edges


    posts.forEach((post, index) => {
        createPage({
            component: postTemplate,
            path: `/posts/${slugify(post.node.frontmatter.postDate.toLowerCase())}/${post.node.fields.slug}`,
            context: {
                slug: post.node.fields.slug,
                next: index === 0 ? null : posts[index - 1].node,
                prev: index === (posts.length - 1) ? null : posts[index + 1].node
            }
        })
    })
}







