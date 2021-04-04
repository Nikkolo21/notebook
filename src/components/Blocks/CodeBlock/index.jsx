import React from 'react';
import './CodeBlock.scss';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
// themes
import "ace-builds/src-noconflict/theme-textmate"; // Light
// import "ace-builds/src-noconflict/theme-crimson_editor"; // Light
// import "ace-builds/src-noconflict/theme-github"; // Light
import "ace-builds/src-noconflict/theme-katzenmilch"; // Light (grey)
// import "ace-builds/src-noconflict/theme-solarized_light"; // Light (pink) LOVE IT!
// import "ace-builds/src-noconflict/theme-sqlserver"; // Light
// import "ace-builds/src-noconflict/theme-ambiance"; // Dark. i love this

const CodeBlock = ({
  name = "",
  runCodeFn = () => {},
  runCodeAndCreateFn = () => {},
  createCodeFn = () => {},
  result
}) => {
  return (
    <section className="editor-section">
      <AceEditor
        highlightActiveLine={false}
        mode="javascript"
        name={name}
        width="100%"
        className="editor"
        defaultValue="// Write code here"
        wrapEnabled={true}
        setOptions={{
          theme: "ace/theme/textmate",
          fontSize: 18,
          showGutter: true,
          showLineNumbers: false,
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
            exec: runCodeFn,
            readOnly: false
          },
          {
            name: 'Run code and create new',
            bindKey: {
              win: 'Shift-Enter',  mac: 'Shift-Enter'
            },
            exec: runCodeAndCreateFn,
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
          },
          // create new directly
          {
            name: 'Create new code',
            bindKey: {
              win: 'Ctrl-Shift-C',  mac: 'Command-Shift-C'
            },
            exec: createCodeFn,
          },
          {
            name: 'Create new image',
            bindKey: {
              win: 'Ctrl-Shift-I',  mac: 'Command-Shift-I'
            },
            exec: () => console.log("create image"),
          },
          {
            name: 'Create new graphic',
            bindKey: {
              win: 'Ctrl-Shift-G',  mac: 'Command-Shift-G'
            },
            exec: () => console.log("create graphic"),
          },
          {
            name: 'Create new PDF',
            bindKey: {
              win: 'Ctrl-Shift-P',  mac: 'Command-Shift-P'
            },
            exec: () => console.log("create graphic"),
          },
          {
            name: 'Create new text',
            bindKey: {
              win: 'Ctrl-Shift-X',  mac: 'Command-Shift-X'
            },
            exec: () => console.log("create text"),
          }
        ]}
        showPrintMargin={false}
        editorProps={{
            $blockScrolling: true
        }}
      />
      {
        result && 
        <AceEditor
          highlightActiveLine={false}
          readOnly={true}
          mode="json"
          name={`${name}-read`}
          width="100%"
          className="editor-section_result"
          value={result}
          wrapEnabled={true}
          setOptions={{
            theme: "ace/theme/katzenmilch",
            fontSize: 18,
            showGutter: true,
            showLineNumbers: false,
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
  );
}

export default CodeBlock;
