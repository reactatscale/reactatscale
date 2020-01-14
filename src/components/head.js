import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery } from 'gatsby'

const Head = ({ title, description }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
    `)
    return (
        <div>
            <Helmet title={`${title} | ${data.site.siteMetadata.title}`} lang="en">
                <meta name='description' content={description ? description : data.site.siteMetadata.description} />
            </Helmet>
        </div>
    )
}

export default Head