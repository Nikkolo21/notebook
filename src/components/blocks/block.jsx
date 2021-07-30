import React from 'react';
import './Block.scss';

export const Block = ({text, children, color = 'rgba(10,10,10,0.1)', actions = []}) => {
  return (
    <div className="block-wrapper">
      <div className="block-actions" style={{backgroundColor: color}}>
        { text }
        { actions.map(action => <a onClick={action.onClick}>{action.icon}</a>) }
      </div>
      { children }
    </div>
  )
}
