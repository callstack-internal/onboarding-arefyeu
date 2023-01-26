import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

function CityWeatherListHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 60,
    width: '100%',
    backgroundColor: '#C8C8C8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
  },
});

export default memo(CityWeatherListHeader);
