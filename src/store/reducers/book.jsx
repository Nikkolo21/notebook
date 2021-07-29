import {
  OPEN_HELP_MODAL,
  CLOSE_HELP_MODAL,
} from '../actions/book';

const initialState = {
  helpModal: false,
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
    default:
      return state;
  }
};

export default bookReducer;
