import React from "react";
import Post from "../components/post";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql } from "gatsby";

export const query = graphql`
  query MyTagQuery($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { regex: $tag } } }
      sort: {
        order: [DESC, ASC]
        fields: [frontmatter___date, frontmatter___part]
      }
    ) {
      edges {
        node {
          frontmatter {
            tags
            date(formatString: "MMMM D, YYYY")
            title
            slug
            part
          }
          html
          id
        }
      }
    }
  }
`;

// { pageContext: { tag } }
const TagPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { tag },
}) => {
  const posts = edges.map(edge => ({
    title: edge.node.frontmatter.title,
    author: edge.node.frontmatter.author,
    tags: edge.node.frontmatter.tags,
    slug: edge.node.frontmatter.slug,
    date: edge.node.frontmatter.date,
    part: edge.node.frontmatter.part,
    html: edge.node.html,
    id: edge.node.id,
  }));

  return (
    <Layout>
      <SEO title={tag.slice(1, -1)} />
      {posts.map(post => (
        // <pre>{JSON.stringify(post, null, 2)}</pre>
        <Post key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default TagPage;
