import React from 'react';
import './Tab.scss';

interface TabProps {
  active?: boolean;
}
const Tab: React.FC<TabProps> = ({ active = false, children }) => {
  return <div className={`tab ${active ? '--active' : ''}`}>{children}</div>;
};

interface TabGroupProps {}
const TabGroup: React.FC<TabGroupProps> = ({ children }) => (
  <div className="tab-group">{children}</div>
);

export { Tab, TabGroup };
