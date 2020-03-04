import React, { FC } from "react";

import "headings.scss";

const Heading1: FC = ({ children }) => {
  return <h1 className="heading-1">{children}</h1>;
};

export { Heading1 };
