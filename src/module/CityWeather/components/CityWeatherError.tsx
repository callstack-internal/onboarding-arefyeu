import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {useCityWeatherContext} from '../context/CityWeatherContext';

function CityWeatherError() {
  const {handleLoadCitiesWeather} = useCityWeatherContext() || {};
  return (
    <View style={styles.error}>
      <Text>Something went wrong...</Text>
      <TouchableOpacity
        accessibilityRole="button"
        onPress={handleLoadCitiesWeather}>
        <Text testID="error" style={styles.text}>
          Please try again
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
  },
});

export default memo(CityWeatherError);
