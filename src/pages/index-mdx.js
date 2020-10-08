import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Post from "../components/post";
import SEO from "../components/seo";
import usePosts from "../hooks/use-posts";

const IndexPage = () => {
  const posts = usePosts();

  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => (
        // <pre>{JSON.stringify(post, null, 2)}</pre>
        <Post key={post.id} post={post} />
      ))}
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  );
};

export default IndexPage;
