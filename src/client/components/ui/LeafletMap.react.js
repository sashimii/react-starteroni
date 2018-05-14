import React from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import styles from './LeafletMap.scss';

import { Regions } from '../../ontarioRegions';

console.log(Regions);
// 71.07292108571425, -105.08900342857167

const LeafletMap = ({ geoJSON }) => {
  const position = [49.8139276, -85.3768696];

  const style = {
    color: '#006400',
    weight: 1,
    opacity: 0.65
  };

  const getStyle = feature => {
    const { data } = feature.properties;
    const { largestVote } = data;
    const getOpacity = partyName => {
      return parseFloat(data.results[partyName]) / 100;
    };
    switch (largestVote) {
      case 'Liberals':
        return {
          color: '#FF0000',
          weight: 1,
          opacity: getOpacity('Liberals')
        };
      case 'PCs':
        return {
          color: '#0000FF',
          weight: 1,
          opacity: getOpacity('PCs')
        };
      case 'NDP':
        return {
          color: '#FFFF00',
          weight: 1,
          opacity: getOpacity('NDP')
        };
      case 'Greens':
        return {
          color: '#00FF00',
          weight: 1,
          opacity: getOpacity('Greens')
        };
      case 'Other':
      default:
        return {
          color: '#000000',
          weight: 1,
          opacity: getOpacity('Other')
        };
    }
  };

  const Popups = (feature, layer) => {
    const showDataAsHTML = () => {
      const { results } = feature.properties.data;
      const showResults = Object.keys(results).map(partyName => {
        return `<p>${partyName}: ${results[partyName]}</p>`;
      });
      return `
        <h3>${feature.properties.name}</h3>
        ${showResults.join('')}
      `;
    };
    layer.bindPopup(showDataAsHTML());
  };

  return (
    <Map center={position} zoom={5} className={styles['leaflet-map']}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <GeoJSON data={geoJSON} style={getStyle} onEachFeature={Popups} />
    </Map>
  );
};

export default LeafletMap;
