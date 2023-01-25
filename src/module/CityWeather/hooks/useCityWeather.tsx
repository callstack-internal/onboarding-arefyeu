import {useCityWeatherContext} from '../context/CityWeatherContext';
import {CityWeather} from '../types';

function useWeatherForCity(id: number): CityWeather {
  const {weather} = useCityWeatherContext() || {};
  const cityWeather = weather?.find(item => item.id === id);
  if (!cityWeather) {
    throw new Error('No weather was found for current city');
  }
  return cityWeather;
}

export default useWeatherForCity;
