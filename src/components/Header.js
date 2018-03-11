import React from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import LogoIcon from "mdi-material-ui/Blur";
import Button from "material-ui/Button";
import Link from "gatsby-link";
import font from "../styles/font";
import Tabs, { Tab } from "material-ui/Tabs";

const styles = {
  root: {
    flexGrow: 1
  },
  title: {
    flex: 1,
    // fontFamily: font.antonio,
    textDecoration: "none"
  },
  tabs: {},
  tab: {
    minWidth: "auto"
  }
};

class Header extends React.Component {
  render() {
    const { classes, active } = this.props;
    const color = active === "index" ? "secondary" : "primary";
    return (
      <div className={classes.root}>
        <AppBar position="static" color={color}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              component={Link}
              to="/"
            >
              <LogoIcon />
            </IconButton>
            <Typography
              variant="subheading"
              color="inherit"
              className={classes.title}
              component={Link}
              to="/"
            >
              CONSENBUS
            </Typography>

            <Tabs
              value={active ? active : "index"}
              className={classes.tabs}
              indicatorColor={color}
            >
              <Tab
                className={classes.tab}
                value="index"
                label="Features"
                component={Link}
                to="/"
              />
              <Tab
                className={classes.tab}
                value="docs"
                label="Docs"
                component={Link}
                to="/docs/"
              />
              <Tab
                className={classes.tab}
                value="blog"
                label="Blog"
                component={Link}
                to="/blog/"
              />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
