export const addExclamationMark = numMarks => {
  return {
    type: 'ADD_EXCLAMATION_MARK',
    numMarks
  };
};

export const updateCurrentProductView = productData => {
  return {
    type: 'UPDATE_CURRENT_PRODUCT_VIEW',
    productData
  };
};
