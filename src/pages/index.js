import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/post";
import SEO from "../components/seo";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
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
      <SEO title="Home" />
      {posts.map(post => (
        //<pre>{JSON.stringify(post, null, 2)}</pre>
        <Post key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query MyPostQuery {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date, frontmatter___part]
        order: [DESC, ASC]
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            slug
            tags
            title
            part
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;
