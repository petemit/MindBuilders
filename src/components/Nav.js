import React, { Component } from "react";
import { Link } from "gatsby";
import { Divider, Tabs, Tab, Typography } from "@material-ui/core";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class Nav extends Component {
    render() {
        const { currentPage, tabs } = this.props;

        return (
            <div>
                <Tabs
                    currentPage={currentPage}
                    onChange={(e, value) => this.props.onChangeEvent(value)}
                >
                    {Object.keys(tabs).map(tab => (
                        <Tab key={tab} label={tab} value={tab} />
                    ))}
                </Tabs>
                <Divider />
                {<TabContainer>{tabs[currentPage]}</TabContainer>}
            </div>
        );
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
