import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { FaInstagram, FaTwitter } from "react-icons/fa";

import { rhythm } from "../utils/typography";

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author, social } = data.site.siteMetadata;
                return (
                    <div
                        style={{
                            display: `flex`,
                        }}
                    >
                        <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={author}
                            style={{
                                marginRight: rhythm(1 / 2),
                                marginBottom: 0,
                                minWidth: 50,
                                borderRadius: `100%`
                            }}
                            imgStyle={{
                                borderRadius: `50%`
                            }}
                        />
                        <div>
                            <p
                                style={{
                                    fontFamily: `Roboto, sans-serif`,
                                    marginTop: 0
                                }}
                            >
                                Written by <strong>{author}</strong>, a software
                                developer whose goal is to make the kind of apps
                                that help you to BE and to DO.
                                {` `}
                            </p>
                            <p>
                                <a
                                    style={{
                                        boxShadow: "none",
                                        textDecoration: "none"
                                    }}
                                    href={`https://twitter.com/${
                                        social.twitter
                                    }`}
                                >
                                    <FaTwitter />
                                </a>

                                <a
                                    style={{
                                        marginLeft: 15,
                                        boxShadow: "none",
                                        textDecoration: "none"
                                    }}
                                    href={`https://instagram.com/${
                                        social.instagram
                                    }`}
                                >
                                    <FaInstagram />
                                </a>
                            </p>
                        </div>
                    </div>
                );
            }}
        />
    );
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
                    twitter
                    instagram
                }
            }
        }
    }
`;

export default Bio;
