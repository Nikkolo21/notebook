import React from 'react';
import './ConsoleBlock.scss';
import Playground from 'javascript-playgrounds';

const ConsoleBlock = ({ info }) => {
  return (
    <Playground
      title={info?.id}
      className="console"
      panes={[{type: 'player', style: {display: 'none'}}, {type: 'console', showLineNumber: false, renderReactElements: true}]}
      code={info?.result}
    />
  );
}

export default ConsoleBlock;
