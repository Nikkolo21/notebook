import React, { useEffect, useState } from 'react';
import CodeBlock from '../CodeBlock';
import './Book.scss'

const TYPES = {
  editor: 'editor',
  code: 'code',
}

const Book = () => {
  const [elements, setElements] = useState([]);
  
  const newElement = {
    name: `editor-${elements.length + 1}`,
    type: TYPES.editor,
    result: null,
  }

  useEffect(() => {
    setElements(elem => [...elem, newElement]);
  }, []) // add a new element when the app load

  const runCode = editor => {
    let ev = Function(editor.getValue());
    setElements(elem => {
      const newElements = elem.map(e => {
        if(e.name === editor.container.id) {
          return {...e, result: JSON.stringify(ev(), undefined, 4)};
        }
        return e;
      })
      return newElements;
    });
  }

  const runCodeAndCreate = editor => {
    setElements(elem => [...elem, newElement]);
    console.log(editor.getValue());
  }

  return (
    <section className="book-section">
      <div className="book-section_body">
        {
          elements.map((elem, index) =>
            <section key={index}>
              {
                elem.type === TYPES.editor &&
                <CodeBlock name={elem.name} runCodeFn={runCode} runCodeAndCreateFn={runCodeAndCreate} result={elem.result} />
              }
            </section>
          )
        }
      </div>
    </section>
  );
}

export default Book;
