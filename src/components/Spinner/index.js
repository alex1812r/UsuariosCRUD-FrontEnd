import React from 'react';
import './Spinner.css';

const Spinner = ({ size }) => {
  const sz = size ? size : '';
  return (
    <div className={`sk-chase ${sz}`}>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  );
}
 
export default Spinner;