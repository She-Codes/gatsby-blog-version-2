import React from "react";

export const PostSection = props => {
  return (
    <section
      className={`bg-white shadow-md border border-black border-solid rounded p-2 text-gray-900 leading-7 ${props.className}`}
    >
      {props.children}
    </section>
  );
};
