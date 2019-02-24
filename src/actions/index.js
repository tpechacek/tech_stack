// the function below is called an 'action creator'.
// Whenever we call the action creater, it will automatically be dispatched
// to all the reducers.

export const selectLibrary = libraryId => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
