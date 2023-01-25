import React, {PropsWithChildren, useContext} from 'react';

import {createContext, useCallback, useMemo, useState} from 'react';
import {CityWeather} from '../types';
import fetchWeather from '../api/fetchWeather';

const WeatherContext = createContext<{
  weather: CityWeather[];
  handleLoadCitiesWeather: () => void;
  loading: boolean;
} | null>(null);

function CityWeatherContext({children}: PropsWithChildren) {
  const [weather, setWeather] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoadCitiesWeather = useCallback(async () => {
    try {
      const weather = await fetchWeather();
      setWeather(weather);
    } catch (error) {
      //TODO error here
    }
    setLoading(false);
  }, []);

  const value = useMemo(
    () => ({weather, handleLoadCitiesWeather, loading}),
    [handleLoadCitiesWeather, loading, weather],
  );
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export default CityWeatherContext;

export function useCityWeatherContext() {
  return useContext(WeatherContext);
}
