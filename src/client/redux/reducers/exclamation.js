const exclamation = (state = '', action) => {
  switch (action.type) {
    case 'ADD_EXCLAMATION_MARK':
      return state + '!';
    default:
      return state;
  }
};

export default exclamation;
