import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
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
    value: null,
  }

  useEffect(() => {
    setElements(elem => [...elem, newElement]);
  }, [])

  const runCode = (editor) => {
    console.log(editor.container.id);
    console.log(editor.getValue());
    const ev = eval(editor.getValue());
    console.log(ev);
  }
  

  const runCodeAndCreate = (editor) => {
    setElements(elem => [...elem, newElement]);
    console.log(editor.getValue());
  }

  return (
    <section style={{padding: "20px"}}>
      {
        elements.map((elem, index) =>
          elem.type === TYPES.editor &&
          <AceEditor
              key={index}
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
        )
      }
    </section>
  );
}

export default App;
