import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Image from "../components/image";
import me from "../images/me.jpg";

const Post = ({ post }) => (
  <article className="mb-4">
    <header className="flex items-end mb-3">
      <div className="w-12 h-12 overflow-hidden border-2 border-black border-solid rounded-full">
        <Image />
      </div>
      <div className="flex flex-col pl-2">
        <div>
          <span className="text-red-600 text-xs uppercase">
            {post.tags
              .split(" ")
              .map((tag, i, arr) =>
                i !== arr.length - 1 ? `#${tag} ` : `#${tag}`
              )}
          </span>
        </div>
        <h4 className="text-lg leading-tight">{post.title}</h4>
        <span className="text-xs">{post.date}</span>
      </div>
    </header>
    <div>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  </article>
);

export default Post;
