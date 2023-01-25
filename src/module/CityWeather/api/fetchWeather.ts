import {CitiesWeatherApiResponse, CityWeather} from '../types';
import {API_KEY, API_URL, CITIES_LIST} from './constants';
async function fetchWeather(): Promise<CityWeather[]> {
  const url = `${API_URL}/group?id=${CITIES_LIST.join()}&appid=${API_KEY}&units=imperial`;
  const response = await fetch(url);
  const result = (await response.json()) as CitiesWeatherApiResponse;
  return result.list.map(
    ({
      id,
      name,
      weather: [{main: condition, icon}],
      main: {temp: temperature, humidity, pressure},
      clouds: {all: clouds},
      wind: {speed: windSpeed},
    }) => ({
      id,
      name,
      icon,
      condition,
      temperature,
      humidity,
      pressure,
      clouds,
      windSpeed,
    }),
  );
}

export default fetchWeather;
