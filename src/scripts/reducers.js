import * as actionTypes from './actions/types';

const reducers = (state = {}, action) => {

  switch (action.type) {
    case actionTypes.ACTION1_TYPE:
      return {action: action.value || 1};
    case actionTypes.ACTION2_TYPE:
      return {action: 2};
    default:
      return state
  }

};

export default reducers;
