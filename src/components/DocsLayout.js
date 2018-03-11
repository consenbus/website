import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Typography from "material-ui/Typography";
import Layout from "./Layout";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: 600,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
    height: "100%"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

function Docs(props) {
  const { classes, children } = props;

  return (
    <Layout active="docs">
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <List>
            <ListItem button component={Link} to="/docs/">
              <ListItemText primary="Getting Started" />
            </ListItem>
            <ListItem button component={Link} to="/docs/faq">
              <ListItemText primary="Frequently Asked Question" />
            </ListItem>
            <ListItem button component={Link} to="/docs/key-concepts">
              <ListItemText primary="Key Concepts" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>{children}</main>
      </div>
    </Layout>
  );
}

export default withStyles(styles)(Docs);
