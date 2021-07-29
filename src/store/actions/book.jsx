export const OPEN_HELP_MODAL = 'book/OPEN_HELP_MODAL';
export const CLOSE_HELP_MODAL = 'book/CLOSE_HELP_MODAL';
export const SET_BLOCK = 'book/SET_BLOCK';

const openHelpModal = () => ({
  type: OPEN_HELP_MODAL,
});

const closeHelpModal = () => ({
  type: CLOSE_HELP_MODAL,
});

const setBlock = (payload) => ({
  type: SET_BLOCK,
  payload,
});

export {
  openHelpModal,
  closeHelpModal,
  setBlock,
};
