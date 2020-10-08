/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { PostSection } from "../components/post-section";
import { Paragraph } from "../components/paragraph";
import { Code } from "../components/code";
import Pre from "./pre";
import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import useTags from "../hooks/use-tags";

import Header from "./header";
import "./layout.css";

const shortcodes = {
  Link,
  PostSection,
  p: Paragraph,
  pre: Pre,
  code: Code,
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="wrapper grid gap-3 p-4">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div class="flex">
          <aside className="about pr-4 flex justify-end flex-grow">
            <div className="w-48">
              <h2 className="font-bold text-2xl text-blog-primary-blue pb-3">
                ABOUT ME
              </h2>
              <p className="text-lg">
                A primarily front-end dev learning all I can while sharing bits
                and pieces of it here.
              </p>

              <div className="mt-3">
                {useTags().map(tag => (
                  <Link
                    to={`/${tag}`}
                    key={tag}
                    className="text-lg text-red-600 font-semibold uppercase block"
                  >
                    # {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <main>
            <div className="posts fixed pr-4">{children}</div>
          </main>

          <aside className="right-col pl-4 w-48 flex-grow">
            <h3 className="font-bold text-blog-primary-blue uppercase pb-3">
              Top Posts
            </h3>
            <div>
              <a className="text-xl underline">The Article Name</a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
