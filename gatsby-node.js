/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const tagResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);

  const slugResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  const postTagArr = tagResult.data.allMarkdownRemark.edges
    .map(edge => edge.node.frontmatter.tags.split(" "))
    .flat();

  const nonDuplicateTagArr = [...new Set(postTagArr)];

  const postSlugArr = slugResult.data.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter.slug
  );

  const nonDuplicateSlugArr = [...new Set(postSlugArr)];

  nonDuplicateTagArr.forEach(tag => {
    createPage({
      path: tag,
      context: { tag: `/${tag}/` },
      component: require.resolve("./src/templates/tag.js"),
    });
  });

  nonDuplicateSlugArr.forEach(slug => {
    createPage({
      path: slug,
      context: { slug: `/${slug}/` },
      component: require.resolve("./src/templates/post.js"),
    });
  });
};
