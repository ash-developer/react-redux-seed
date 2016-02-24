import * as actionTypes from './actions/types';

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

export const actionAsync = () => {

  return (dispatch) => {
    dispatch(action1(9));

    setTimeout(() => {
      dispatch(action1(-1));
    }, 5000);
  };

};
