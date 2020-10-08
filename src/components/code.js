import React from "react";

export const Code = ({ children }) => {
  return (
    <code
      className="inline rounded-sm p-1 text-sm"
      style={{ backgroundColor: "#fff6ea" }}
    >
      {children}
    </code>
  );
};
