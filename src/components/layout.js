import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import { Typography } from "@material-ui/core";

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;

        if (location.pathname === rootPath) {
            header = (
                <Typography variant="h2" gutterBottom>
          
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                
                </Typography>
            );
        } else {
            header = (
                <Typography variant="h2">
                
                    <Link
                        style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`
                        }}
                        to={`/`}
                    >
                        {title}
                    </Link>
                    </Typography>
            );
        }
        return (
            <div style={container}>
                <header>{header}</header>
                <main>{children}</main>
                <footer>
                   <Typography variant="caption"> © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </Typography>
                </footer>
            </div>
        );
    }
}

const container = {
    
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
};

export default Layout;
