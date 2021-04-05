import React, { useEffect } from 'react';
import Playground from 'javascript-playgrounds';

const ConsoleBlock = ({ info }) => {
  return (
    <Playground
      title={info?.id}
      style={{marginTop: 20, padding: 8, backgroundColor: "rgba(237, 246, 255, 1"}}
      panes={[{type: 'player', style: {display: 'none'}}, {type: 'console', showLineNumber: false, renderReactElements: true}]}
      code={info?.result}
    />
  );
}

export default ConsoleBlock;
