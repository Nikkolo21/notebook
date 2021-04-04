import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
// themes
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";

import './App.scss';

const TYPES = {
  editor: 'editor',
  code: 'code',
}

function App() {
  const [elements, setElements] = useState([]);
  
  const newElement = {
    name: `editor-${elements.length + 1}`,
    type: TYPES.editor,
    result: null,
  }

  useEffect(() => {
    setElements(elem => [...elem, newElement]);
  }, []) // add a new element when the app load

  const runCode = (editor) => {
    const t = Function(editor.getValue());
    const newElements = [...elements];
    newElements[editor.container.id.split("-")[1]].result = JSON.stringify(t(), null, '\t');
    setElements(newElements);
  }

  const runCodeAndCreate = (editor) => {
    setElements(elem => [...elem, newElement]);
    console.log(editor.getValue());
  }

  return (
    <section style={{padding: "20px"}}>
      {
        elements.map((elem, index) =>
          <section key={index}>
            {
              elem.type === TYPES.editor &&
              <AceEditor
                  mode="javascript"
                  name={`editor-${index}`}
                  width="100%"
                  style={{marginBottom: 20}}
                  defaultValue="// Insert code here"
                  wrapEnabled={true}
                  setOptions={{
                    theme: "ace/theme/github",
                    fontSize: 18,
                    showGutter: true,
                    minLines: 1,
                    maxLines: 200,
                  }}
                  copyWithEmptySelection={true}
                  commands={[
                    {
                      name: 'Run code',
                      bindKey: {
                        win: 'Ctrl-Enter',  mac: 'Command-Enter'
                      },
                      exec: runCode,
                      readOnly: false
                    },
                    {
                      name: 'Run code and create new',
                      bindKey: {
                        win: 'Shift-Enter',  mac: 'Shift-Enter'
                      },
                      exec: runCodeAndCreate,
                    },
                    {
                      name: 'Save code',
                      bindKey: {
                        win: 'Ctrl-S',  mac: 'Command-S'
                      },
                      exec: () => console.log('saving code'),
                    },
                    {
                      name: 'Remove Line',
                      bindKey: {
                        win: 'Ctrl-D',  mac: 'Command-D'
                      },
                      exec: 'removeline',
                    }
                  ]}
                  showPrintMargin={false}
                  editorProps={{
                      $blockScrolling: true
                  }}
              />
            }
            {
              elem.result &&
              <AceEditor
                  key={index}
                  readOnly={true}
                  mode="json"
                  name={`editor-read-${index}`}
                  width="100%"
                  style={{marginBottom: 20}}
                  value={elem.result}
                  wrapEnabled={true}
                  setOptions={{
                    theme: "ace/theme/github",
                    fontSize: 18,
                    showGutter: false,
                    minLines: 1,
                    maxLines: 200,
                  }}
                  copyWithEmptySelection={true}
                  showPrintMargin={false}
                  editorProps={{
                      $blockScrolling: true
                  }}
              />
            }
          </section>
        )
      }
    </section>
  );
}

export default App;
