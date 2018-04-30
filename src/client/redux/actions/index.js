/* @flow */
import axios from 'axios';

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

type City = {
  value: string,
  text: string
};

export const changeCitySelection = (city: City) => {
  return {
    type: 'CHANGE_CITY_SELECTION',
    city
  };
};

type Time = string;

type SunInformation = {
  sunset: Time,
  sunrise: Time
};

export const updateSunInformation = (sunInfo: SunInformation) => {
  console.log('SUN INFORMATION', sunInfo);
  return {
    type: 'UPDATE_SUN_INFORMATION',
    sunInfo
  };
};

export const fetchWoeid = (city: City) => (dispatch: Function) => {
  return axios
    .get(`https://www.metaweather.com/api/location/search/?query=${city.value}`)
    .then(res => {
      const [cityData] = res.data;
      return axios.get(
        `https://www.metaweather.com/api/location/${cityData.woeid}`
      );
    })
    .then(res => {
      const sunset = res.data.sun_set;
      const sunrise = res.data.sun_rise;
      dispatch(updateSunInformation({ sunset, sunrise }));
    });
};
