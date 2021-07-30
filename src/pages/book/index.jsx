import React, { useLayoutEffect } from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CodeBlock from '../../components/blocks/codeBlock';
import { TextBlock } from '../../components/blocks/textBlock';
import { HelpModal } from '../../components/modals/helpModal';
import { editBlock, openHelpModal, pushBlock } from '../../store/actions/book';
import { getBlocksSelector } from '../../store/selectors/book';
import './Book.scss';

const TYPES = {
  editor: 'editor',
  code: 'code',
  text: 'text',
}

const getNewElement = (type) => ({
  name: `${type}-${uuidv4()}`,
  type,
  result: null,
});

const Book = () => {
  const dispatch = useDispatch();
  const blocks = useSelector(getBlocksSelector);

  const createCodeBlock = useCallback(() => {
    dispatch(pushBlock(getNewElement(TYPES.editor)));
  }, [dispatch])

  const createTextBlock = useCallback(() => {
    dispatch(pushBlock(getNewElement(TYPES.text)));
  }, [dispatch])

  useLayoutEffect(() => {
    createCodeBlock();
  }, []); // add a new element when the app load

  const findBlock = editor => {
    return blocks.find(block => block.name === editor.container.id);
  };

  const runCode = editor => {
    const findedBlock = findBlock(editor);
    dispatch(editBlock({...findedBlock, result: editor.getValue()}));
  }

  const runCodeAndCreate = editor => {
    const findedBlock = findBlock(editor);
    dispatch(editBlock({...findedBlock, result: editor.getValue()}));
  }

  const openHelpModalFn = () => {
    dispatch(openHelpModal());
  }

  const getBlock = useCallback((elem) => {
    switch (elem.type) {
      case TYPES.editor:
        return (
          <CodeBlock
            elem={elem}
            runCodeFn={runCode} 
            runCodeAndCreateFn={runCodeAndCreate}
            createCodeBlockFn={createCodeBlock}
            createTextBlockFn={createTextBlock}
            openHelpModalFn={openHelpModalFn}
          />
        )
      case TYPES.text:
        return (
          <TextBlock id={elem.name} elem={elem} />
        )
      default:
        break;
    }
  }, [blocks])

  return (
    <>
      {
        blocks[0] && (
          <section className="book-section">
            <button className="book-section_help-toggle" onClick={openHelpModalFn}>
              ?
            </button>
            <div className="book-section_body">
              {
                blocks.map((elem, index) => (
                <section key={index}>
                  {getBlock(elem)}
                </section>)
                )
              }
            </div>
          </section>
        )
      }
      <HelpModal />
    </>
  );
}

export default Book;
