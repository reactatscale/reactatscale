import React from 'react'
import { Link } from 'gatsby'

// * Components 
import Layout from '../../components/layout'
import Banner from '../../components/banner/banner'
import { DiscussionEmbed } from "disqus-react"
import { remarkForm, DeleteAction } from 'gatsby-tinacms-remark'
import Head from '../../components/head'

// * Styles 
import './post.sass'
import '../../components/pager/pager.sass'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: { eq: $slug } }) {
            frontmatter {
                title 
                postDate
                description
            }
            fileRelativePath
            rawFrontmatter
            rawMarkdownBody
            html
            timeToRead
        }
    }
`

const Post = props => {
    const post = props.data.markdownRemark

    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: post.slug },
    }

    const { prev, next } = props.pageContext
    return (
        <Layout>
            <Head title={post.frontmatter.title} description={post.frontmatter.description} />
            <div className="post-content">
                <Banner title={post.frontmatter.title} subTitle={post.frontmatter.postDate && `Posted by Peter Kellner on ${post.frontmatter.postDate} · ${post.timeToRead} mins read`} />
                <div className="center">
                    <div className="post-structure post">
                        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                    </div>
                </div>
                <div className="center">
                    <div className="post-comments"><DiscussionEmbed {...disqusConfig} /></div>
                </div>

                <div className="center">
                    <nav className='pager'>
                        <div className="older">
                            {prev && <Link to={'posts/' + prev.fields.slug} rel="prev">
                                <button className='more-btn older'> ← Last Post </button>
                            </Link>}
                        </div>

                        <div className="newer">
                            {next && <Link to={'posts/' + next.fields.slug} rel="next">
                                <button className='more-btn'> Next Post → </button>
                            </Link>}
                        </div>
                    </nav>
                </div>
            </div>
        </Layout>
    )
}

const deleteButton = {
    label: 'Delete',
    actions: [DeleteAction]
}

export default remarkForm(Post, deleteButton)