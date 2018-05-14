export const mapData = (state = null, { type, geoJSON }) => {
  switch (type) {
    case 'UPDATE_MAP_DATA':
      return geoJSON;
    default:
      return state;
  }
};
