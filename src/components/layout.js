import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

class Layout extends React.Component {
    render() {
        const { location, title, children } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;

        if (location.pathname === rootPath) {
            header = (
                <h1
                    style={{
                        ...scale(1.5),
                        marginBottom: rhythm(1.5),
                        marginTop: 0,
                        fontFamily: `Roboto`
                    }}
                >
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
                </h1>
            );
        } else {
            header = (
                <h3
                    style={{
                        fontFamily: `Roboto, sans-serif`,
                        marginTop: 0
                    }}
                >
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
                </h3>
            );
        }
        return (
            <div style={container}>
                <header>{header}</header>
                <main>{children}</main>
                <footer
                    style={{
                        fontFamily: `Roboto, sans-serif`,
                        marginTop: 0
                    }}
                >
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
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
