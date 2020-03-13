import React from 'react';
import './frame.scss';

const Frame: React.FC = ({ children }) => (
  <div className="frame">{children}</div>
);

export { Frame };
