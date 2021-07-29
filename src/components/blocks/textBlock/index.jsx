import React, { useState } from 'react';
import { Block } from '../block';
import './TextBlock.scss';

export const TextBlock = () => {
  const [innerHTML, setInnerHTML] = useState();
  return (
    <Block text="Text" color="rgba(104, 182, 220, 0.52)">
      <div className="text-block" onInput={(e) => setInnerHTML(e.target.innerHTML)} contentEditable>
      </div>
    </Block>
  )
}
