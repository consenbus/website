import React from "react";
import Layout from "../../components/Layout";
import Avatar from "material-ui/Avatar";
import { withStyles } from "material-ui/styles";
import Card, { CardContent } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Link from "gatsby-link";
import font from "../../styles/font";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  title: {
    textDecoration: "none",
    paddingTop: theme.spacing.unit * 5,
    fontFamily: font.antonio,
    color: theme.palette.primary.main,
    "&:active, &:focus, &:hover": {
      color: theme.palette.secondary.main
    }
  },
  card: { marginTop: "30px" }
});

const PostLink = ({ post, classes }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="headline" component="h2">
        <Link to={post.frontmatter.path} className={classes.title}>
          {post.frontmatter.title}
        </Link>
      </Typography>
      <Typography variant="subheading" color="textSecondary">
        {post.frontmatter.date}
      </Typography>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </CardContent>
  </Card>
);

const IndexPage = ({ classes, data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <PostLink key={edge.node.id} post={edge.node} classes={classes} />
    ));

  return (
    <Layout active="blog">
      <div className={classes.root}>{Posts}</div>
    </Layout>
  );
};

export default withStyles(styles)(IndexPage);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
