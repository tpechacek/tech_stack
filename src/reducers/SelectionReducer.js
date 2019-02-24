export default (state = null, action) => {
  // console.log(action);
  // return null;

  // Boilerplate for most reducers
  switch (action.type) {
    case 'select_library':
      return action.payload;

    default:
      return state;
  }
};
