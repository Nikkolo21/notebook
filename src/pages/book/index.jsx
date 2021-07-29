import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CodeBlock from '../../components/blocks/codeBlock';
import { TextBlock } from '../../components/blocks/textBlock';
import { HelpModal } from '../../components/modals/helpModal';
import { openHelpModal, setBlock } from '../../store/actions/book';
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
  const [elements, setElements] = useState([]);

  const createCodeBlock = useCallback(() => {
    dispatch(setBlock(getNewElement(TYPES.editor)));
  }, [dispatch])

  const createTextBlock = useCallback(() => {
    dispatch(setBlock(getNewElement(TYPES.text)));
  }, [dispatch])

  useEffect(() => {
    createCodeBlock();
  }, []); // add a new element when the app load

  const runCode = editor => {
    setElements(elem => {
      const newElements = elem.map(e => {
        if(e.name === editor.container.id) {
          return {...e, result: editor.getValue()};
        }
        return e;
      })
      return newElements;
    });
  }

  const runCodeAndCreate = editor => {
    setElements(elem => {
      const newElements = elem.map(e => {
        if(e.name === editor.container.id) {
          return {...e, result: editor.getValue()};
        }
        return e;
      });
      return [...newElements, getNewElement(TYPES.editor)];
    });
  }

  const openHelpModalFn = () => {
    dispatch(openHelpModal());
  }

  const getBlock = (elem) => {
    switch (elem.type) {
      case TYPES.editor:
        return (
          <CodeBlock
            name={elem.name}
            runCodeFn={runCode}
            runCodeAndCreateFn={runCodeAndCreate}
            createCodeBlockFn={createCodeBlock}
            createTextBlockFn={createTextBlock}
            openHelpModalFn={openHelpModalFn}
            result={elem.result}
          />
        )
      case TYPES.text:
        return (
          <TextBlock />
        )
      default:
        break;
    }
  }

  return (
    <>
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
      <HelpModal />
    </>
  );
}

export default Book;
