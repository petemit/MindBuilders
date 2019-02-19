import React from "react";
import { rhythm } from "../utils/typography"
import { Link } from "gatsby";
import { Typography, Card } from "@material-ui/core";

export const BlogList = props => {
    return Object.values(props.posts).map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
            <Card style={{padding: 20, marginBottom: 10}}>
            <div key={node.fields.slug}>
            <Typography variant="h5">
                
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {title}
                    </Link>
                
                </Typography>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
            </Card>
        );
       
    });
};
