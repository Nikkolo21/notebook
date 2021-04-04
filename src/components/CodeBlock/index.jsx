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

const CodeBlock = ({name = "", runCodeFn = () => {}, runCodeAndCreateFn = () => {}, result }) => {
  return (
    <>
      <AceEditor
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
          readOnly={true}
          mode="json"
          name={`${name}-read`}
          width="100%"
          className="editor"
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
    </>
  );
}

export default CodeBlock;
