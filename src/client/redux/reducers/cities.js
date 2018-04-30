const defaultCities = [
  {
    value: 'toronto',
    text: 'Toronto'
  },
  {
    value: 'tokyo',
    text: 'Tokyo'
  },
  {
    value: 'london',
    text: 'London'
  },
  {
    value: 'sydney',
    text: 'Sydney'
  }
];

export const selectedCity = (state = {}, { type, city }) => {
  switch (type) {
    case 'CHANGE_CITY_SELECTION':
      return city;
    default:
      return state;
  }
};

export const woeid = (state = {}, { type }) => {};

export const listOfCities = (state = defaultCities, { type }) => {};
