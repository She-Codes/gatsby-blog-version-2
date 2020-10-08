import { graphql, useStaticQuery } from "gatsby";

const usePosts = tag => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            slug
            author
            tags
            date(formatString: "MMMM D, YYYY")
          }
          body
          id
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    tags: post.frontmatter.tags,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    body: post.body,
    id: post.id,
  }));
};

export default usePosts;
