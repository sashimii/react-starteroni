/* @flow */

export const addExclamationMark = (
  numMarks: number
): { type: string, numMarks: number } => {
  return {
    type: 'ADD_EXCLAMATION_MARK',
    numMarks
  };
};

export const updateCurrentProductView = (
  productData: any
): { type: string, productData: any } => {
  return {
    type: 'UPDATE_CURRENT_PRODUCT_VIEW',
    productData
  };
};
