import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const posts = this.props.data.allMarkdownRemark.edges

        return (
            <div>
                <Helmet title={this.props.data.site.siteMetadata.title} />
                {posts.map(post => {
                    if (post.node.path !== '/404/') {
                        const title =
                            post.node.frontmatter.title || post.node.path
                        return (
                            <div key={post.node.frontmatter.path}>
                                <h3>
                                    <Link to={post.node.frontmatter.path}>
                                        {post.node.frontmatter.title}
                                    </Link>
                                </h3>
                                <small>{post.node.frontmatter.date}</small>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: post.node.excerpt,
                                    }}
                                />
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
}

BlogIndex.propTypes = {
    route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        path
                        date(formatString: "DD MMMM, YYYY")
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`
