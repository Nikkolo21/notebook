import React from 'react';
import Playground from 'javascript-playgrounds';
import './ConsoleBlock.scss';

const panes = [
  {
    type: 'player',
    style: {
      display: 'none'
    }
  },
  {
    type: 'console',
    showLineNumber: false,
    renderReactElements: true
  }
]

const ConsoleBlock = ({ info }) => {
  return (
    <Playground
      title={info?.id}
      className="console"
      panes={panes}
      code={info?.result}
    />
  );
}

export default ConsoleBlock;
