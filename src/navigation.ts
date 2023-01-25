export type RootStackParamList = {
  // Your custom param type belongs here.
  CityWeatherScreen: undefined;
  CityWeatherListItems: undefined;
  CityWeatherDetails: {id: number};
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
