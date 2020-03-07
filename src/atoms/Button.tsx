import React, { FC } from "react";

import "./Button.scss";

const Button: FC = ({ children }) => {
  return <button className="button">{children}</button>;
};

export { Button };
