import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";
import Nav from "../components/Nav";
import { BlogList } from "./../components/BlogList";
import Apps from "./apps";

class BlogIndex extends React.Component {
    state = {
        currentPage: "blog"
    };

    render() {
        const handleChange = currentPage => {
            this.setState({ currentPage });
        };

        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const posts = data.allMarkdownRemark.edges;

        const tabs = {
            blog: <BlogList posts={posts} />,
            apps: (
                <Apps/>
            )
        };

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="All posts"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <Bio />
                <Nav
                    tabs={tabs}
                    currentPage={this.state.currentPage}
                    onChangeEvent={handleChange}
                />
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                    }
                }
            }
        }
    }
`;
