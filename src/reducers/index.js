// This is the window into all other reducers.

import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});
