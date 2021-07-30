import React, { useState } from 'react';
import { Block } from '../block';
import './TextBlock.scss';

export const TextBlock = () => {
  const [innerHTML, setInnerHTML] = useState();
  return (
    <Block text="Text" color="rgba(10,10,10,0.2)">
      <div className="text-block" onInput={(e) => setInnerHTML(e.target.innerHTML)} contentEditable>
      </div>
    </Block>
  )
}
