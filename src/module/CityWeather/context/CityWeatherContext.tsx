import React, {PropsWithChildren, useContext} from 'react';

import {createContext, useCallback, useMemo, useState} from 'react';
import {CityWeather} from '../types';
import fetchWeather from '../api/fetchWeather';

const WeatherContext = createContext<{
  weather: CityWeather[];
  handleLoadCitiesWeather: () => void;
  loading: boolean;
  error?: unknown;
} | null>(null);

function CityWeatherContext({children}: PropsWithChildren) {
  const [weather, setWeather] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(undefined);

  const handleLoadCitiesWeather = useCallback(async () => {
    setLoading(true);
    try {
      const weather = await fetchWeather();
      if (error) setError(undefined);
      setWeather(weather);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [error]);

  const value = useMemo(
    () => ({weather, handleLoadCitiesWeather, loading, error}),
    [error, handleLoadCitiesWeather, loading, weather],
  );
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export default CityWeatherContext;

export function useCityWeatherContext() {
  return useContext(WeatherContext);
}
