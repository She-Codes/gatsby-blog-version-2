import React from "react";
import Image from "../components/image";
import { Link } from "gatsby";

const Post = ({ post }) => {
  let el;

  const header =
    post.part === 1 ? (
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
          <h4 className="text-lg text-blog-primary-blue leading-tight font-medium">
            {post.title}
          </h4>
          <span className="text-xs">{post.date}</span>
        </div>
      </header>
    ) : null;

  const article = (
    <article className={`${post.part === 1 ? "mt-5" : "mt-0"}`}>
      {header}
      <section
        className={`post-section bg-white shadow-md border border-black border-solid rounded ${
          post.part !== 1 ? "mt-4" : "mt-0"
        } p-2 text-gray-900 leading-7`}
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></section>
    </article>
  );

  if (post.part < 3) {
    el = article;
  } else if (post.part === 3) {
    el = (
      <Link
        to={`/${post.slug}`}
        className="bg-blog-primary-blue text-blog-primary-pink font-medium text-sm py-1 flex justify-center mt-2"
      >
        Read More
      </Link>
    );
  } else {
    el = null;
  }

  return el;
};

export default Post;
