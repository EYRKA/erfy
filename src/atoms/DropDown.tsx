import React from 'react';
import './DropDown.scss';

interface DropDownProps {
  options: string[];
  name: string;
}
const DropDown: React.FC<DropDownProps> = ({
  options = ['fire', 'water'],
  name = 'example'
}) => {
  return (
    <select className="dropdown" name={name} id={name}>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export { DropDown };
