import { combineReducers } from 'redux';
// import class from '../reducers/class';

const rootReducer = combineReducers({
  //blank state
  blank: function(state, action) {
    if (state === null) {
      state = [];
    }
    return state;
  }
  //class
});

export default rootReducer;
