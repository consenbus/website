import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";
import Layout from "../components/Layout";
import Card, { CardHeader, CardContent, CardActions } from "material-ui/Card";
import { withStyles } from "material-ui/styles";
import MoreVertIcon from "material-ui-icons/MoreVert";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import Button from "material-ui/Button";
import styles from "../styles/markdown";

class BlogPostTemplate extends React.Component {
  render() {
    const { classes } = this.props;
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const { previous, next } = this.props.pathContext;

    return (
      <Layout active="blog">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className={classes.root}>
          <Card elevation={1}>
            <CardHeader
              action={
                <Button
                  size="small"
                  component={Link}
                  to="/blog/"
                  color="primary"
                >
                  <ChevronLeftIcon /> Back
                </Button>
              }
              title={post.frontmatter.title}
              subheader={post.frontmatter.date}
              classes={{ title: classes.title }}
            />
            <CardContent>
              <div className={classes.content}>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </CardContent>

            <CardActions>
              {previous && (
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={previous.fields.slug}
                  style={{ textTransform: "none" }}
                >
                  {previous.frontmatter.title}
                  <ChevronRightIcon />
                </Button>
              )}

              {next && (
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={next.fields.slug}
                  style={{ textTransform: "none" }}
                >
                  <ChevronLeftIcon />
                  {next.frontmatter.title}
                </Button>
              )}
            </CardActions>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
