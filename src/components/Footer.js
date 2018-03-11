import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";
import Link from "gatsby-link";
import logo from "../assets/img/logo-white.svg";

const styleSheet = theme => ({
  root: {
    paddingTop: "10px",
    overflow: "auto",
    backgroundColor: theme.palette.grey[900],
    color: "white",
    "& a": {
      color: "white",
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.grey[200]
      }
    }
  },
  layout: {
    padding: theme.spacing.unit * 6
  },
  list: {
    margin: 0,
    paddingLeft: 0,
    listStyle: "none"
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  logo: {
    height: "8vw"
  },
  title: {
    color: "white",
    paddingBottom: theme.spacing.unit
  }
});

function AppFooter(props) {
  const { classes } = props;

  return (
    <footer className={classes.root}>
      <div className={classes.layout}>
        <Typography variant="subheading" component="div">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
              <img src={logo} alt="ConsenBus Logo" className={classes.logo} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="title" className={classes.title}>
                Community & Resources
              </Typography>

              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <a
                    href="http://github.com/consenbus/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contribute on GitHub
                  </a>
                </li>
                <li className={classes.listItem}>
                  <a
                    href="https://gitter.im/consenbus"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ConsenBus Gitter
                  </a>
                </li>
                <li className={classes.listItem}>
                  <a
                    href="https://twitter.com/consenbus"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ConsenBus Twitter
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="title" className={classes.title}>
                ConsenBus
              </Typography>

              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link to="/about/">About</Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/about/contact/">Contact</Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/about/roadmap/">Roadmap</Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/about/team/">Team</Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/about/privacy/">Privacy</Link>
                </li>
                <li className={classes.listItem}>
                  <Link to="/about/cookies/">Cookies</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Typography>
      </div>
    </footer>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(AppFooter);
