import * as actionTypes from '../actions/types';

const other = (state = {}, action) => {

  switch (action.type) {
    case actionTypes.ACTION2_TYPE:
      return {action: 2};
    default:
      return state
  }

};

export default other;
