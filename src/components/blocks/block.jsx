import React from 'react';
import './Block.scss';

export const Block = ({text, children, color = 'rgba(10,10,10,0.1)'}) => {
  return (
    <div className="block-wrapper">
      <div className="block-actions" style={{backgroundColor: color}}>
        {text}
      </div>
      {children}
    </div>
  )
}
