import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

function CityWeatherListHeader() {
  return (
    <View style={styles.header}>
      <Text>Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 40,
    width: '100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(CityWeatherListHeader);
