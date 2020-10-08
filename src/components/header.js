import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="flex items-center">
    <div className="flex-grow pr-4"></div>
    <div className="flex header-center">
      <div className="w-20 h-16 border border-blog-primary-blue border-solid flex flex-col justify-center items-center text-blog-primary-blue font-medium">
        <div className="flex flex-col">
          <span className="leading-snug">Nikia</span>
          <span className="leading-snug">Shaw</span>
        </div>
      </div>
      <h1 className="pl-6 text-5xl text-blog-primary-blue font-semibold">
        {siteTitle}
      </h1>
    </div>
    <div className="flex-grow"></div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
