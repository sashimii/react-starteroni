import { addExclamationMark, updateCurrentProductView } from './';

describe('Testing Actions: ', () => {
  describe('addExclamationMark', () => {
    it('should return type: "ADD_EXCLAMATION_MARK"', () => {
      let actionObj = addExclamationMark(2);
      expect(actionObj.type).toBe('ADD_EXCLAMATION_MARK');
    });
    it('should return numMarks', () => {
      let actionObj = addExclamationMark(3);
      expect(actionObj.numMarks).toBe(3);
    });
  });

  describe('updateCurrentProductView(productData)', () => {
    it('should return type: "UPDATE_CURRENT_PRODUCT_VIEW"', () => {
      let mockData = { myData: 'hello' };
      let actionObj = updateCurrentProductView(mockData);
      expect(actionObj.type).toBe('UPDATE_CURRENT_PRODUCT_VIEW');
    });
    it('should return product data as object', () => {
      let mockData = { myData: 'hello' };
      let actionObj = updateCurrentProductView(mockData);
      expect(JSON.stringify(actionObj.productData)).toBe(
        JSON.stringify(mockData)
      );
    });
  });
});
