import * as actionTypes from '../actions/types';

const common = (state = {}, action) => {

  switch (action.type) {
    case actionTypes.ACTION1_TYPE:
      return {action: action.value || 1};
    default:
      return state
  }

};

export default common;
