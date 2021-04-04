import React, { useEffect, useState } from 'react';
import CodeBlock from '../Blocks/CodeBlock';
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
    const ev = Function(editor.getValue());
    if(ev() === window || typeof ev() === "function") return;
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
    const ev = Function(editor.getValue());
    if(ev() === window) return;
    setElements(elem => {
      const newElements = elem.map(e => {
        if(e.name === editor.container.id) {
          return {...e, result: JSON.stringify(ev(), undefined, 4)};
        }
        return e;
      })
      return [...newElements, newElement];
    });
  }

  const createCode = () => {
    setElements(elem => [...elem, newElement]);
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
