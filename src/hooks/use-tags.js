import { graphql, useStaticQuery } from "gatsby";

const useTags = () => {
  const data = useStaticQuery(graphql`
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

  const postTagArr = data.allMarkdownRemark.edges
    .map(edge => edge.node.frontmatter.tags.split(" "))
    .flat();

  const nonDuplicateTagArr = [...new Set(postTagArr)];

  return nonDuplicateTagArr;
};

export default useTags;
