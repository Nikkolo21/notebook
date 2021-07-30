import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import { useDispatch } from 'react-redux';
import { FaPlay, FaTrash } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/theme-ambiance"; // Dark. i love this
import { Block } from '../block';
import ConsoleBlock from '../consoleBlock';
import { commands } from '../../../utils/commands';
import { deleteBlock, editBlock } from '../../../store/actions/book';
import './CodeBlock.scss';

const CodeBlock = ({
  elem = {},
  runCodeFn = () => {},
  runCodeAndCreateFn = () => {},
  createCodeBlockFn = () => {},
  createTextBlockFn = () => {},
  openHelpModalFn = () => {},
}) => {
  const dispatch = useDispatch();
  const [editor, setEditor] = useState();
  const [snippet, setSnippet]  = useState(null);

  useEffect(() => {
    elem?.result && setSnippet({id: uuidv4(), result: elem?.result})
    return () => setSnippet(null);
  }, [elem?.result]);

  useEffect(() => {
    console.log(elem.name)
  }, []);
  
  const deleteBlockFn = () => {
    dispatch(deleteBlock(elem));
  }

  return (
    <Block text="Code" color="rgba(104, 182, 220, 0.52)" actions={[
      {
        id: 1,
        icon: <FaPlay />,
        onClick: () => runCodeFn(editor),
      },
      {
        id: 2,
        icon: <FaTrash />,
        onClick: deleteBlockFn,
      },
    ]}>
      <section className="editor-section">
        <div className="editor-section_code">
          <AceEditor
            onLoad={e => setEditor(e)}
            wrapEnabled
            focus
            copyWithEmptySelection
            highlightActiveLine={false}
            mode="javascript"
            name={elem.name}
            width="100%"
            style={{color: "grey"}}
            setOptions={{
              minLines: 1,
              maxLines: 200,
              tabSize: 2,
              fontSize: 22,
              printMarginColumn: 40,
              showGutter: false,
              showLineNumbers: false,
              displayIndentGuides: false,
              theme: "ace/theme/github",
            }}
            commands={commands({
              runCodeFn,
              runCodeAndCreateFn,
              createCodeBlockFn,
              createTextBlockFn,
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
    </Block>
  );
}

export default CodeBlock;
