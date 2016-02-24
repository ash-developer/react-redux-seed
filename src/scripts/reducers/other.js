import * as actionTypes from '../actions/types';
import Immutable from 'immutable';

const other = (state = Immutable.Map({}), action) => {

  switch (action.type) {
    case actionTypes.ACTION2_TYPE:
      return state.set('action', 2);
    default:
      return state
  }

};

export default other;
