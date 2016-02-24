import * as actionTypes from '../actions/types';
import Immutable from 'immutable';

const common = (state = Immutable.Map({}), action) => {

  switch (action.type) {
    case actionTypes.ACTION1_TYPE:
      return state.set('action', action.value || 1);
    default:
      return state
  }

};

export default common;
