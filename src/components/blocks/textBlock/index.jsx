import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteBlock } from '../../../store/actions/book';
import { Block } from '../block';
import './TextBlock.scss';

export const TextBlock = ({elem}) => {
  const dispatch = useDispatch();
  const [innerHTML, setInnerHTML] = useState();
  
  const deleteBlockFn = () => {
    dispatch(deleteBlock(elem));
  }
  return (
    <Block text="Text" color="rgba(10,10,10,0.2)" actions={[
      {
        icon: <FaTrash />,
        onClick: deleteBlockFn,
      },
    ]}>
      <div className="text-block" onInput={(e) => setInnerHTML(e.target.innerHTML)} contentEditable>
      </div>
    </Block>
  )
}
