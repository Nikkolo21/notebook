import {
  OPEN_HELP_MODAL,
  CLOSE_HELP_MODAL,
  SET_BLOCK,
} from '../actions/book';

const initialState = {
  helpModal: false,
  blocks: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_HELP_MODAL: {
      return {
        ...state,
        helpModal: true,
      };
    }
    case CLOSE_HELP_MODAL: {
      return {
        ...state,
        helpModal: false,
      };
    }
    case SET_BLOCK: {
      return {
        ...state,
        blocks: [
          ...state.blocks,
          action.payload,
        ],
      };
    }
    default:
      return state;
  }
};

export default bookReducer;
