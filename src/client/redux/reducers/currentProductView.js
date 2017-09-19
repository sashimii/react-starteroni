const currentProductView = (state = {}, { type, productData }) => {
  switch (type) {
    case 'UPDATE_CURRENT_PRODUCT_VIEW':
      // console.log(action.payload);
      return Object.assign({}, state, {
        productData
      });
    default:
      return state;
  }
};

export default currentProductView;
