import * as actionTypes from './types';

export const action1 = value => {
  return {
    type: actionTypes.ACTION1_TYPE,
    value: value
  }
};

export const action2 = () => {
  return {
    type: actionTypes.ACTION2_TYPE
  }
};

export const timeout = () => {
  return {
    type: actionTypes.TIMEOUT_REQUESTED_TYPE
  }
};
