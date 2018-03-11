import React from "react";
import Helmet from "react-helmet";
import { withStyles } from "material-ui/styles";
import styles from "../styles/markdown";
import Typography from "material-ui/Typography";
import Layout from "../components/Layout";
import Card, { CardHeader, CardContent } from "material-ui/Card";

class PageTemplate extends React.Component {
  render() {
    const { classes } = this.props;
    const page = this.props.data.markdownRemark;
    return (
      <Layout active="docs">
        <Helmet>
          <title>{page.frontmatter.title}</title>
          <meta name="description" content={page.excerpt} />
          <meta name="og:description" content={page.excerpt} />
          <meta name="twitter:description" content={page.excerpt} />
          <meta name="og:title" content={page.frontmatter.title} />
          <meta name="og:type" content="article" />
          <meta name="twitter.label1" content="Reading time" />
          <meta name="twitter:data1" content={`${page.timeToRead} min read`} />
        </Helmet>

        <div className={classes.root}>
          <Card elevation={0}>
            <CardHeader
              title={page.frontmatter.title}
              classes={{ title: classes.title }}
            />
            <CardContent>
              <div className={classes.content}>
                <div dangerouslySetInnerHTML={{ __html: page.html }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(PageTemplate);

export const pageQuery = graphql`
  query TemplatePageMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
