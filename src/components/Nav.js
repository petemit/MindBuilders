import React, { Component } from "react";
import { Link } from "gatsby";
import { Divider, Tabs, Tab, Typography, Fade } from "@material-ui/core";
import PropTypes from "prop-types";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

class Nav extends Component {
    state = {
        fadeIn: true,
        toValue: "blog"
    };
    render() {
        const { currentPage, tabs } = this.props;
        if (typeof currentPage === "undefined") {
            currentPage = "blog";
        }

        if (tabs !== undefined) {
            return (
                <div>
                    <Tabs
                        value={currentPage}
                        onChange={(e, value) => {
                            this.state.fadeIn === true &&
                                this.setState(
                                    { fadeIn: false, toValue: value }
                                );
                        
                        }}
                    >
                        {Object.keys(tabs).map(tab => {
                            return <Tab key={tab} label={tab} value={tab} />;
                        })}
                    </Tabs>
                    <Divider />
                    <Fade
                        in={this.state.fadeIn}
                        onExited={() => {
                            
                            this.state.fadeIn === false &&
                                this.setState({ fadeIn: true });
                            this.props.onChangeEvent(this.state.toValue);
                        }}
                    >
                        <div>
                            <TabContainer>{tabs[currentPage]}</TabContainer>
                        </div>
                    </Fade>
                </div>
            );
        } else {
            return <div />;
        }
    }
}

const nav = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    listStyleType: "none",
    margin: 5,
    flexDirection: "row",
    textDecoration: "none",
    boxShadow: "none"
};

export default Nav;
