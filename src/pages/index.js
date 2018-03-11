import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import Layout from "../components/Layout";
import logo from "../assets/img/logo-white.svg";
import font from "../styles/font";
// import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Grid from "material-ui/Grid";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import ArrowDownward from "material-ui-icons/ArrowDownward";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 6
  },
  hero: {
    position: "relative",
    minHeight: "80vh",
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
    backgroundImage: "linear-gradient(60deg,#306efe,#003ab7)",
    color: theme.palette.primary.contrastText
  },
  heroBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "auto",
    marginBottom: "-1px"
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 5,
    fontFamily: font.antonio
  },
  content: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing.unit * 12,
      paddingBottom: theme.spacing.unit * 20
    }
  },
  text: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  headline: {
    marginTop: "1rem",
    maxWidth: 800,
    textAlign: "center"
  },
  button: {
    marginTop: theme.spacing.unit * 3
  },
  logo: {
    margin: "20px 0",
    width: "100%",
    height: "35vw",
    maxHeight: 200
  },
  backers: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 2,
    display: "flex",
    justifyContent: "center",
    minHeight: 600
  },
  backersBody: {
    maxWidth: theme.spacing.unit * 90
  },
  card: {
    backgroundColor: "transparent"
  },
  media: {
    height: 200
  },
  subtitle: {
    paddingBottom: theme.spacing.unit * 2,
    fontFamily: font.antonio
  },
  buttonCircle: {
    backgroundColor: "transparent",
    border: "2px solid #306ffd",
    borderRadius: "20px",
    padding: ".5rem 1.5rem",
    fontWeight: 700,
    color: "#306ffd",
    marginTop: "1rem",
    boxShadow: "none",
    "&:hover": {
      color: "#306ffd",
      backgroundColor: "#e1eaff"
    }
  },
  buttonWhite: {
    marginTop: "2rem",
    fontSize: "16px",
    fontSize: "1rem",
    border: "0 solid #fff",
    color: "#306ffd",
    backgroundColor: "#fff",
    borderRadius: "50px",
    padding: "1rem 1.5rem",
    boxShadow: "0 0 20px rgba(0,0,0,.2)",
    transition: "box-shadow .2s ease",
    fontWeight: "700",
    "&:active, &:focus, &:hover": {
      backgroundColor: "#fff",
      boxShadow: "0 0 20px rgba(0,0,0,.7)"
    }
  }
});

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  renderHeroBottom(classes) {
    return (
      <svg
        width="100%"
        height="47px"
        viewBox="0 0 1440 47"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.heroBottom}
        preserveAspectRatio="none"
      >
        <defs />
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M0,0.0577405639 C117.504588,18.44359 269.602477,22.1720696 456.293666,11.2431795 C562.076057,5.05068514 730.784198,0.911127653 885.297232,3.27366179 C1157.17617,7.43074321 1386.98062,21.3276838 1440,38.3891927 L1440,46.9388979 L0,46.9388979 L0,0.0577405639 Z"
            id="Path-9"
            fill="#fafafa"
          />
        </g>
      </svg>
    );
  }

  renderHero(classes) {
    return (
      <div className={classes.hero}>
        <div className={classes.content}>
          <img src={logo} alt="ConsenBus Logo" className={classes.logo} />
          <div className={classes.text}>
            <Typography
              variant="display1"
              component="h1"
              color="inherit"
              className={classes.title}
              gutterBottom
            >
              THE ECONOMY OF EVERYTHING
            </Typography>
            <Typography
              variant="subheading"
              component="h2"
              color="inherit"
              className={classes.headline}
            >
              ConsenBus is the intelligent connection of people, process, data
              and things.
            </Typography>
            <Button
              size="large"
              variant="raised"
              color="primary"
              component="a"
              href="/consenbus-report.pdf"
              className={classes.buttonWhite}
            >
              Access the report <ArrowDownward />
            </Button>
          </div>
        </div>
        {this.renderHeroBottom(classes)}
      </div>
    );
  }

  renderFeatures(classes, data) {
    return (
      <div className={classes.card}>
        <div>
          <Typography
            variant="headline"
            component="h2"
            className={classes.subtitle}
          >
            {data.title}
          </Typography>
          <Typography component="p" variant="subheading">
            {data.description}
          </Typography>
        </div>
        <div>
          <Button
            size="large"
            variant="raised"
            color="primary"
            className={classes.buttonCircle}
          >
            {data.button} <KeyboardArrowRight />
          </Button>
        </div>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Layout active="index">
        {this.renderHero(classes)}
        <div className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              {this.renderFeatures(classes, {
                title: "WEB WALLET",
                description:
                  "ConsenBus Web Wallet is the official online, light wallet for $BUS. With the online wallet, you are in control of your funds without having to download the ledger.",
                button: "Go to Web Wallet"
              })}
            </Grid>
            <Grid item xs={12} sm={6}>
              {this.renderFeatures(classes, {
                title: "EXPLORER",
                description:
                  "ConsenBus Block Explorer is a web tool that provides detailed information about Consenbus blocks, addresses, and transactions.",
                button: "Go to Explorer"
              })}
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
