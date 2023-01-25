import React from 'react';
import {View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigation';
import CityWeatherItem from '../components/CityWeatherItem';
import useWeatherForCity from '../hooks/useCityWeather';
import WeatherRowDetail from '../components/WeatherRowDetail';

function CityWeatherDayDetails({
  route: {
    params: {id},
  },
}: NativeStackScreenProps<RootStackParamList, 'CityWeatherDetails'>) {
  const cityWeather = useWeatherForCity(id);
  const {humidity, pressure, windSpeed, clouds} = cityWeather;
  return (
    <View>
      <CityWeatherItem item={cityWeather} />
      <WeatherRowDetail
        label="Humidity"
        testID="humidity"
        value={`${humidity}%`}
      />
      <WeatherRowDetail
        label="Pressure"
        testID="pressure"
        value={`${pressure} hPa`}
      />
      <WeatherRowDetail
        label="Wind Speed"
        testID="wind-speed"
        value={`${windSpeed} mph`}
      />
      <WeatherRowDetail
        label="Cloud Cover"
        testID="cloud-cover"
        value={`${clouds}%`}
      />
    </View>
  );
}

export default CityWeatherDayDetails;
