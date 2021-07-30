export const OPEN_HELP_MODAL = 'book/OPEN_HELP_MODAL';
export const CLOSE_HELP_MODAL = 'book/CLOSE_HELP_MODAL';
export const PUSH_BLOCK = 'book/PUSH_BLOCK';
export const EDIT_BLOCK = 'book/EDIT_BLOCK';
export const DELETE_BLOCK = 'book/DELETE_BLOCK';

const openHelpModal = () => ({
  type: OPEN_HELP_MODAL,
});

const closeHelpModal = () => ({
  type: CLOSE_HELP_MODAL,
});

const pushBlock = (payload) => ({
  type: PUSH_BLOCK,
  payload,
});

const editBlock = (payload) => ({
  type: EDIT_BLOCK,
  payload,
});

const deleteBlock = (payload) => ({
  type: DELETE_BLOCK,
  payload,
});

export {
  openHelpModal,
  closeHelpModal,
  pushBlock,
  editBlock,
  deleteBlock,
};
