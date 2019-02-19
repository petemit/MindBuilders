import React from "react";
import { rhythm } from "../utils/typography"
import { Link } from "gatsby";

export const BlogList = props => {
    return Object.values(props.posts).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
            <div key={node.fields.slug}>
                <h3
                    style={{
                        marginBottom: rhythm(1 / 4)
                    }}
                >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                    </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
        );
    });
};
