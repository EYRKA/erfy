import React, { FC } from "react";

import "./headings.scss";

const Heading1: FC = ({ children }) => {
  return <h1 className="heading-1">{children}</h1>;
};

const Heading2: FC = ({ children }) => {
  return <h2 className="heading-1">{children}</h2>;
};

const Heading3: FC = ({ children }) => {
  return <h3 className="heading-1">{children}</h3>;
};

const Heading4: FC = ({ children }) => {
  return <h4 className="heading-1">{children}</h4>;
};

const Heading5: FC = ({ children }) => {
  return <h5 className="heading-1">{children}</h5>;
};

const Heading6: FC = ({ children }) => {
  return <h6 className="heading-1">{children}</h6>;
};

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
