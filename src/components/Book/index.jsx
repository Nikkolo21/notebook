import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CodeBlock from '../Blocks/CodeBlock';
import './Book.scss'

const TYPES = {
  editor: 'editor',
  code: 'code',
}

const getNewElement = () => ({
  name: `editor-${uuidv4()}`,
  type: TYPES.editor,
  result: null,
});

const Book = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setElements(elem => [...elem, getNewElement()]);
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
      })
      return [...newElements, getNewElement()];
    });
  }

  const createCode = () => {
    setElements(elem => [...elem, getNewElement()]);
  }

  return (
    <section className="book-section">
      <div className="book-section_body">
        {
          elements.map((elem, index) =>
            <section key={index}>
              {
                elem.type === TYPES.editor &&
                <CodeBlock
                  name={elem.name}
                  runCodeFn={runCode}
                  runCodeAndCreateFn={runCodeAndCreate}
                  createCodeFn={createCode}
                  result={elem.result}
                />
              }
            </section>
          )
        }
      </div>
    </section>
  );
}

export default Book;
