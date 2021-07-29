import { v4 as uuidv4 } from 'uuid';

export const commands = ({
  runCodeFn = () => {},
  runCodeAndCreateFn = () => {},
  createCodeFn = () => {},
  openHelpModalFn = () => {}
}) => ([
  {
    id: uuidv4(),
    name: 'Create new code',
    bindKey: {
      win: 'Ctrl-Shift-C',  mac: 'Command-Shift-C'
    },
    exec: createCodeFn,
  },
  {
    id: uuidv4(),
    name: 'Run code',
    bindKey: {
      win: 'Ctrl-Enter',  mac: 'Command-Enter'
    },
    exec: runCodeFn,
    readOnly: false
  },
  {
    id: uuidv4(),
    name: 'Run code and create new',
    bindKey: {
      win: 'Shift-Enter',  mac: 'Shift-Enter'
    },
    exec: runCodeAndCreateFn,
  },
  {
    id: uuidv4(),
    name: 'Save code',
    bindKey: {
      win: 'Ctrl-S',  mac: 'Command-S'
    },
    exec: () => console.log('saving code'),
  },
  {
    id: uuidv4(),
    name: 'Remove Line',
    bindKey: {
      win: 'Ctrl-D',  mac: 'Command-D'
    },
    exec: 'removeline',
  },
  {
    id: uuidv4(),
    name: 'Create new image',
    bindKey: {
      win: 'Ctrl-Shift-I',  mac: 'Command-Shift-I'
    },
    exec: () => console.log("create image"),
  },
  {
    id: uuidv4(),
    name: 'Create new graphic',
    bindKey: {
      win: 'Ctrl-Shift-G',  mac: 'Command-Shift-G'
    },
    exec: () => console.log("create graphic"),
  },
  {
    id: uuidv4(),
    name: 'Create new PDF',
    bindKey: {
      win: 'Ctrl-Shift-P',  mac: 'Command-Shift-P'
    },
    exec: () => console.log("create graphic"),
  },
  {
    id: uuidv4(),
    name: 'Create new text',
    bindKey: {
      win: 'Ctrl-Shift-X',  mac: 'Command-Shift-X'
    },
    exec: () => console.log("create text"),
  },
  {
    id: uuidv4(),
    name: 'Open help modal',
    bindKey: {
      win: 'Ctrl-Shift-H',  mac: 'Command-Shift-H'
    },
    exec: openHelpModalFn,
  }
]);
