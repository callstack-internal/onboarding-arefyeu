import React from 'react';
import {StyleSheet, View} from 'react-native';

function CityWeatherListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
  },
});

export default CityWeatherListItemSeparator;
