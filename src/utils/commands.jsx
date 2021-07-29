export const commands = ({runCodeFn, runCodeAndCreateFn, createCodeFn, openHelpModalFn}) => ([
  {
    name: 'Create new code',
    bindKey: {
      win: 'Ctrl-Shift-C',  mac: 'Command-Shift-C'
    },
    exec: createCodeFn,
  },
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
  },
  {
    name: 'Open help modal',
    bindKey: {
      win: 'Ctrl-Shift-H',  mac: 'Command-Shift-H'
    },
    exec: openHelpModalFn,
  }
]);
