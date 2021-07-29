import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import { v4 as uuidv4 } from 'uuid';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/theme-ambiance"; // Dark. i love this
import ConsoleBlock from '../consoleBlock';
import { commands } from '../../../utils/commands';
import './CodeBlock.scss';

const CodeBlock = ({
  name = "",
  runCodeFn = () => {},
  runCodeAndCreateFn = () => {},
  createCodeFn = () => {},
  openHelpModalFn = () => {},
  result
}) => {
  const [snippet, setSnippet]  = useState(null);

  useEffect(() => {
    result && setSnippet({id: uuidv4(), result})
    return () => setSnippet(null);
  }, [result])

  return (
    <section className="editor-section">
      <div className="editor-section_code">
        <AceEditor
          wrapEnabled
          focus
          copyWithEmptySelection
          highlightActiveLine={false}
          mode="javascript"
          name={name}
          width="100%"
          style={{color: "grey"}}
          defaultValue="console.log('My code')"
          setOptions={{
            minLines: 1,
            maxLines: 200,
            tabSize: 2,
            fontSize: 18,
            printMarginColumn: 40,
            showGutter: false,
            showLineNumbers: false,
            displayIndentGuides: false,
            theme: "ace/theme/github",
          }}
          commands={commands({
            runCodeFn,
            runCodeAndCreateFn,
            createCodeFn,
            openHelpModalFn,
          })}
          showPrintMargin={false}
          editorProps={{
            $blockScrolling: true
          }}
        />
      </div>
      {
        snippet && <ConsoleBlock key={snippet.id} info={snippet} />
      }
    </section>
  );
}

export default CodeBlock;
