import {
  OPEN_HELP_MODAL,
  CLOSE_HELP_MODAL,
  PUSH_BLOCK,
  EDIT_BLOCK,
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
    case PUSH_BLOCK: {
      return {
        ...state,
        blocks: [
          ...state.blocks,
          action.payload,
        ],
      };
    }
    case EDIT_BLOCK: {
      const finalBlock = state.blocks.map(block => {
        if (block.name === action.payload.name) {
          return action.payload;
        }
        return block;
      })
      return {
        ...state,
        blocks: finalBlock,
      };
    }
    default:
      return state;
  }
};

export default bookReducer;
