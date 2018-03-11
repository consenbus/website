const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogTemplate = path.resolve("./src/templates/blog.js");
    const docsTemplate = path.resolve("./src/templates/docs.js");
    const pageTemplate = path.resolve("./src/templates/page.js");

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const blogPosts = _.filter(
          result.data.allMarkdownRemark.edges,
          edge => {
            const slug = _.get(edge, `node.fields.slug`);
            const draft = _.get(edge, `node.frontmatter.draft`);
            if (!slug) return;

            if (_.includes(slug, `/blog/`) && !draft) {
              return edge;
            }
          }
        );

        // Create blog pages.
        blogPosts.forEach((edge, index) => {
          const next = index === 0 ? false : blogPosts[index - 1].node;
          const prev =
            index === blogPosts.length - 1 ? false : blogPosts[index + 1].node;

          createPage({
            path: `${edge.node.fields.slug}`, // required
            component: blogTemplate,
            context: {
              slug: edge.node.fields.slug,
              prev,
              next
            }
          });
        });

        // Create docs pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const slug = _.get(edge, `node.fields.slug`);
          if (!slug) return;

          if (_.includes(slug, `/docs/`)) {
            createPage({
              path: `${edge.node.fields.slug}`, // required
              component: docsTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
        }); // Create docs pages

        // Create page pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          const slug = _.get(edge, `node.fields.slug`);
          if (!slug) return;

          if (!_.includes(slug, `/blog/`) && !_.includes(slug, `/docs/`)) {
            createPage({
              path: `${edge.node.fields.slug}`, // required
              component: pageTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }
        }); // Create page pages
      })
    );
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
