export interface CityWeather {
  id: number;
  name: string;
  icon: string;
  condition: string;
  temperature: number;
  clouds: number;
  windSpeed: number;
  humidity: number;
  pressure: number;
}

interface CityWeatherApiResponse {
  id: number;
  name: string;
  weather: [
    {
      icon: string;
      main: string;
    },
  ];
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
}
export interface CitiesWeatherApiResponse {
  list: CityWeatherApiResponse[];
}
