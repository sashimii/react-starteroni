import axios from 'axios';
import csv from 'csvjson';

import { Regions } from '../../ontarioRegions';

export const updateMapData = geoJSON => {
  return {
    type: 'UPDATE_MAP_DATA',
    geoJSON
  };
};

export const retrievePollData = () => dispatch => {
  const handleData = data => {
    console.log('CSV: ', data);
    const jsonData = csv.toColumnArray(data);
    console.log('JSON: ', jsonData);
    const { Party } = jsonData;

    const getWinner = results => {
      const parties = ['Liberals', 'PCs', 'NDP', 'Greens', 'Other'];
      const resultsArray = Object.values(results).map(result => {
        return parseFloat(result);
      });
      const winningIndex = resultsArray.indexOf(Math.max(...resultsArray));
      return parties[winningIndex];
    };

    const getPartyPollResults = region => {
      return {
        Liberals: jsonData[region][0],
        PCs: jsonData[region][1],
        NDP: jsonData[region][2],
        Greens: jsonData[region][3],
        Other: jsonData[region][4]
      };
    };
    const cleanData = {
      North: {
        results: getPartyPollResults('North'),
        largestVote: getWinner(getPartyPollResults('North'))
      },
      East: {
        results: getPartyPollResults('East'),
        largestVote: getWinner(getPartyPollResults('East'))
      },
      'South Central': {
        results: getPartyPollResults('South Central'),
        largestVote: getWinner(getPartyPollResults('South Central'))
      },
      Southwestern: {
        results: getPartyPollResults('Southwestern'),
        largestVote: getWinner(getPartyPollResults('Southwestern'))
      },
      GTA: {
        results: getPartyPollResults('GTA'),
        largestVote: getWinner(getPartyPollResults('GTA'))
      },
      Toronto: {
        results: getPartyPollResults('Toronto'),
        largestVote: getWinner(getPartyPollResults('Toronto'))
      }
    };

    const updatedGeoJson = Regions.features.map(feature => {
      const { properties } = feature;
      const { name } = feature.properties;
      feature.properties.data = cleanData[name];
      return feature;
    });
    console.log('GEOJSON: ', updatedGeoJson);
    dispatch(updateMapData(updatedGeoJson));
  };
  axios
    .get(window.___MAP_DATA_ENDPOINT___)
    .then(({ data }) => {
      handleData(data);
    })
    .catch(error => {
      const csv = document.getElementById('Mainstreet_data--Ontario-2018');
      console.log(csv.innerHTML.trim());
      handleData(csv.innerHTML.trim());
    });
};
