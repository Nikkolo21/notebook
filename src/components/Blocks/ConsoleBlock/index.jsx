import React from 'react';
import Playground from 'javascript-playgrounds';

const ConsoleBlock = ({ info }) => {
  return (
    <Playground
      title={info?.id} 
      style={{height: 200, marginTop: 20}}
      panes={[{type: 'player', style: {display: 'none'}}, {type: 'console'}]}
      code={info?.result}
    />
  );
}

export default ConsoleBlock;
