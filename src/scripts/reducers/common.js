import * as actionTypes from '../actions/types';
import { Map } from 'immutable';

let reducers = {};

reducers[actionTypes.ACTION1_TYPE] = (state, action) => {
  return state.set('action', action.value || 1);
};

export default (state = Map({}), action) => {
  let reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
