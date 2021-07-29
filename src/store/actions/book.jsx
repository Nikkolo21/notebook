export const OPEN_HELP_MODAL = 'book/OPEN_HELP_MODAL';
export const CLOSE_HELP_MODAL = 'book/CLOSE_HELP_MODAL';

const openHelpModal = () => ({
  type: OPEN_HELP_MODAL,
});

const closeHelpModal = () => ({
  type: CLOSE_HELP_MODAL,
});

export {
  openHelpModal,
  closeHelpModal,
};
